"use client";  // Ensures this component runs on the client side

import { useCart } from '../context/CartContext';
import { Product } from '../../../types/type';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/sanity';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Setup Sanity Image URL Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => (source ? builder.image(source).url() : "");

// Product Page Component
const ProductPage = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  // Generate Image URL
  const imageUrl = product.image ? urlFor(product.image) : "";

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity: 1, // Set quantity to 1
      image: imageUrl, // Store correct image URL
    };
    addToCart(cartItem);
    router.push('/cartpage'); // Redirect to cart page
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.name}
              className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0"
              width={500}
              height={500}
            />
          ) : (
            <p className="text-red-500">Image not available</p>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900">${product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add to Cart
          </button>

          {/* Back to Products Button */}
          <Link href="/shop">
            <button className="mt-2 px-6 py-2 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
