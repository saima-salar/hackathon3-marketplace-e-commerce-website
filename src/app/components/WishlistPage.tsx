"use client";

import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";  // Import Sanity image URL builder
import { client } from "../../sanity/lib/sanity"; // Import Sanity client

// Sanity image builder function
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).url();

// ✅ Wishlist Item Interface
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string; // API provides `image`
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category: string;
}

// ✅ Cart Item Interface
interface CartItem extends WishlistItem {
  quantity: number;
}

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (item: WishlistItem) => {
    const cartItem: CartItem = {
      ...item,
      quantity: 1,
      image: item.image, // Ensure `image` is used properly
    };
    addToCart(cartItem);
    router.push("/cartpage");
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-xl">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* ✅ Fix Image Rendering */}
              <div className="relative h-64 mb-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image)}  // Convert image ID to full URL
                    width={500}
                    height={300}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-md"
                  />
                )}
              </div>

              {/* ✅ Product Details */}
              <div className="text-center">
                <h3 className="font-semibold text-xl text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>

                {/* ✅ Action Buttons */}
                <div className="mt-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
