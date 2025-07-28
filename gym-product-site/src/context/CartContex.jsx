import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
