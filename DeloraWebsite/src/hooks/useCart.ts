"use client";

import { useState, useEffect, useCallback } from 'react';

const SHOPIFY_GRAPHQL_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-04/graphql.json`;
const SHOPIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch(query: string, variables = {}) {
  try {
    const response = await fetch(SHOPIFY_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN || '',
      },
      body: JSON.stringify({ query, variables }),
    });

    return await response.json();
  } catch (error) {
    console.error('Shopify Fetch Error:', error);
    return null;
  }
}

export function useCart() {
  const [cart, setCart] = useState<any>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize cart
  useEffect(() => {
    const fetchCart = async () => {
      const savedCartId = localStorage.getItem('delora_cart_id');
      if (savedCartId) {
        const query = `
          query getCart($id: ID!) {
            cart(id: $id) {
              id
              checkoutUrl
              totalQuantity
              lines(first: 10) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        price { amount currencyCode }
                        product { title featuredImage { url } }
                      }
                    }
                  }
                }
              }
              estimatedCost {
                totalAmount { amount currencyCode }
              }
            }
          }
        `;
        const result = await shopifyFetch(query, { id: savedCartId });
        if (result?.data?.cart) {
          setCart(result.data.cart);
        } else {
          localStorage.removeItem('delora_cart_id');
        }
      }
    };
    fetchCart();
  }, []);

  const addToCart = useCallback(async (variantId: string) => {
    let currentCartId = localStorage.getItem('delora_cart_id');
    
    if (!currentCartId) {
      const createCartMutation = `
        mutation cartCreate($input: CartInput) {
          cartCreate(input: $input) {
            cart { id checkoutUrl }
          }
        }
      `;
      const result = await shopifyFetch(createCartMutation, {
        input: { lines: [{ merchandiseId: variantId, quantity: 1 }] }
      });
      if (result?.data?.cartCreate?.cart) {
        const newCart = result.data.cartCreate.cart;
        localStorage.setItem('delora_cart_id', newCart.id);
        setCart(newCart);
      }
    } else {
      const addToCartMutation = `
        mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
              id
              checkoutUrl
              totalQuantity
              lines(first: 10) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        price { amount currencyCode }
                        product { title featuredImage { url } }
                      }
                    }
                  }
                }
              }
              estimatedCost {
                totalAmount { amount currencyCode }
              }
            }
          }
        }
      `;
      const result = await shopifyFetch(addToCartMutation, {
        cartId: currentCartId,
        lines: [{ merchandiseId: variantId, quantity: 1 }]
      });
      if (result?.data?.cartLinesAdd?.cart) {
        setCart(result.data.cartLinesAdd.cart);
      }
    }
    setIsCartOpen(true);
  }, []);

  return { cart, addToCart, isCartOpen, setIsCartOpen };
}
