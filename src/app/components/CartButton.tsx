"use client";
import { useCart } from "../context/CartContext";
import { CartItem } from "../../../types/type"; // Ensure the correct import path

const CartButton = ({ product }: { product: CartItem }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: product.quantity || 1, // Ensure quantity is set to 1 if not defined
    };

    addToCart(cartItem); // Pass the cartItem, which is of type CartItem
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default CartButton;
