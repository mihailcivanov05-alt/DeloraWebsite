"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useCart } from '@/hooks/useCart';
import CartDrawer from '@/components/CartDrawer';

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const cartState = useCart();

  return (
    <CartContext.Provider value={cartState}>
      {children}
      <CartDrawer 
        cart={cartState.cart} 
        isOpen={cartState.isCartOpen} 
        onClose={() => cartState.setIsCartOpen(false)} 
      />
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}
