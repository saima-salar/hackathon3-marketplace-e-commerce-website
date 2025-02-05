// src/components/CartButton.tsx (Client Component)
'use client';

import { useCart } from "../context/CartContext";

const CartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // Now using addToCart to add the product to the cart
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
};

export default CartButton;
