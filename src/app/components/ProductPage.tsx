"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const ProductPage = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("⚠️ Please select a size and color before adding to cart.");
      return;
    }

    addToCart({ ...product, selectedSize, selectedColor });
    alert(`🛒 ${product.name} added to cart!`);
    router.push("/cartpage"); // ✅ Redirect to Cart Page after adding
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">{product.name}</h1>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <p className="text-3xl mt-6 font-bold text-gray-900">${product.price}</p>
            </div>

            {/* Size Options */}
            <div className="mt-8">
              <span className="font-semibold text-lg text-gray-800">Select Size:</span>
              <div className="flex space-x-3 mt-3">
                {["L", "M", "S"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 border ${
                      selectedSize === size ? "bg-blue-500 text-white" : "border-gray-300 text-gray-800"
                    } rounded-lg hover:bg-gray-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-6">
              <span className="font-semibold text-lg text-gray-800">Choose Color:</span>
              <div className="flex space-x-4 mt-3">
                {["#000000", "#092e5a", "#873e23"].map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === color ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
