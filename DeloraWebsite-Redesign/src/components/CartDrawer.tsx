"use client";

import React from "react";
import { X, Zap, Lock } from "lucide-react";
import "./CartDrawer.css";

interface CartDrawerProps {
  cart: any;
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ cart, isOpen, onClose }) => {
  if (!isOpen) return null;

  const lines = cart?.lines?.edges || [];
  const subtotal = cart?.estimatedCost?.totalAmount || { amount: 0, currencyCode: "BGN" };

  return (
    <div className="cartOverlay" onClick={onClose} role="presentation">
      <div
        className="cartDrawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="cartHeader">
          <h2>Your Cart</h2>
          <button
            className="closeButton"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="cartItems">
          {lines.length === 0 ? (
            <div className="emptyCart">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            lines.map(({ node }: any) => (
              <div key={node.id} className="cartItem">
                <div
                  className="cartItemImage"
                  style={{
                    background: `url(${node.merchandise.product.featuredImage?.url || '/delora-photos/pomelli_bdna_image_0514-4.png'}) center/cover`
                  }}
                />
                <div className="cartItemInfo">
                  <div className="cartItemTitle">{node.merchandise.product.title}</div>
                  <div className="cartItemPrice">
                    {node.merchandise.price.amount} {node.merchandise.price.currencyCode} &times; {node.quantity}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {lines.length > 0 && (
          <div className="cartFooter">
            <div className="cartTotal">
              <span>Subtotal</span>
              <span>{subtotal.amount} {subtotal.currencyCode}</span>
            </div>

            <a href={cart.checkoutUrl} className="checkoutButton">
              <span>Checkout with Shop Pay</span>
              <Zap size={16} aria-hidden="true" />
            </a>

            <div className="biometricBadge">
              <Lock size={13} aria-hidden="true" />
              <span>Secure Biometric Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
