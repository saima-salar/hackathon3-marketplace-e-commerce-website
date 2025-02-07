"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react"; // ✅ Import ReactNode

interface CartItem {
  description: ReactNode; // ✅ Use ReactNode instead of ReactI18NextChildren
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Cart context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  totalPrice: number;
  clearCart: () => void; // Add clearCart here
}

// Creating the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Function to add to cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item already exists, update quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If item doesn't exist, add it
      return [...prevCart, item];
    });
  };

  // Function to remove from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Clears the cart
    localStorage.removeItem("cart"); // Optionally remove cart from localStorage
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
