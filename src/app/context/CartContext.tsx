
// // CartContext.tsx
// "use client"

// import { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   selectedSize: string;
//   selectedColor: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
//   totalPrice: number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]); // Clears all items in the cart
//   };

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use Cart Context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

"use client";

import React, { createContext, useContext, useState } from "react";

// Cart Item Interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  description: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, selectedSize: string, selectedColor: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to use Cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart Provider Props
interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Add to Cart with Size & Color Check
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
      );

      if (itemExists) {
        // Increase quantity if item with same size & color exists
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item if not in cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // ✅ Remove Item from Cart (specific size & color)
  const removeFromCart = (id: string, selectedSize: string, selectedColor: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  // ✅ Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Calculate Total Price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};