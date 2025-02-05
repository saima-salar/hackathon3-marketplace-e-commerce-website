// src/components/CartButton.tsx (Client Component)
'use client'

import { useCart } from "../context/CartContext";

const CartButton = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Add cart logic here
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default CartButton;
