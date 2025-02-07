/*eslint-disable*/
"use client";
import React, { createContext, useContext, useState } from "react";

// ✅ Wishlist Item Interface (removing color and size)
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imagePath: string; // Using imagePath as per API
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

// ✅ Create Wishlist Context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// ✅ Hook to Use Wishlist
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

interface WishlistProviderProps {
  children: React.ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // ✅ Add to Wishlist (Avoid Duplicates)
  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some(
        (wishlistItem) => wishlistItem.id === item.id
      );
      return itemExists ? prevWishlist : [...prevWishlist, item];
    });
  };

  // ✅ Remove from Wishlist
  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  // ✅ Clear Entire Wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
