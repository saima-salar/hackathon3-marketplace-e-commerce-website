
// "use client"
// import { createContext, useContext, useState, ReactNode } from "react";

// interface WishlistItem {
//   id: string;
//   name: string;
//   image: string;
// }

// interface WishlistContextType {
//   wishlist: WishlistItem[];
//   addToWishlist: (item: WishlistItem) => void;
//   removeFromWishlist: (id: string) => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };

// interface WishlistProviderProps {
//   children: ReactNode;
// }

// export const WishlistProvider = ({ children }: WishlistProviderProps) => {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

//   const addToWishlist = (item: WishlistItem) => {
//     setWishlist((prev) => [...prev, item]);
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishlist((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

"use client";

import React, { createContext, useContext, useState } from "react";

// Wishlist Item Interface
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  selectedSize: string;
  selectedColor: string;
  description: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string, selectedSize: string, selectedColor: string) => void;
  clearWishlist: () => void;
}

// Create Context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Hook to use Wishlist
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

// Wishlist Provider Props
interface WishlistProviderProps {
  children: React.ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Add to Wishlist
  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.find(
        (wishlistItem) =>
          wishlistItem.id === item.id &&
          wishlistItem.selectedSize === item.selectedSize &&
          wishlistItem.selectedColor === item.selectedColor
      );

      if (!itemExists) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  // Remove from Wishlist
  const removeFromWishlist = (id: string, selectedSize: string, selectedColor: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter(
        (item) =>
          !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  // Clear Wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
