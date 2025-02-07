// src/hooks/useCart.ts
import { useState } from 'react';
import { Product } from '../../types/type';

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return { cart, addToCart, removeFromCart };
};
