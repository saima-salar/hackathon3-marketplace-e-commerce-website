// src/app/components/CartButton.tsx
"use client"
// src/app/components/CartButton.tsx

import { useCart } from "../context/CartContext";
import { CartItem } from "../../../types/type"; // Import CartItem instead of Product

const CartButton = ({ product }: { product: CartItem }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);  // product should now have the additional properties like quantity, selectedSize, etc.
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default CartButton;
