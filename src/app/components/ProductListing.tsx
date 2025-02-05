// 'use client'; // Required for React hooks in Next.js

// import React from 'react';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';

// // Ensure the Product type is defined
// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   image: { asset: { _ref: string } };
  
// }

// const ProductListing = ({ product }: { product: Product }) => {
//   return (
//     <div>
//       {/* Product List */}
//       <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//       <Link href={`/product/${product.id}`}>
//   <Image
//     src={urlFor(product.image).url()}
//     alt={product.name}
//     height={300}
//     width={300}
//     className="h-[250px] w-full object-cover"
//   />
// </Link>
//         {/* Product Details */}
//         <div className="p-4 text-center">
//           <p className="text-lg font-medium text-gray-800">{product.name}</p>
//           <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;

'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext'; // Import Wishlist context
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/sanity';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: { asset: { _ref: string } };
}

const ProductListing = ({ product }: { product: Product }) => {
  const { addToWishlist } = useWishlist(); // Get addToWishlist from context
  const [addedToWishlist, setAddedToWishlist] = useState(false); // Track if product is added

  // Handle Add to Wishlist click
  const handleAddToWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the click from propagating
    addToWishlist(product); // Add product to wishlist
    setAddedToWishlist(true); // Update button text
    setTimeout(() => setAddedToWishlist(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          height={300}
          width={300}
          className="h-[250px] w-full object-cover"
        />
      </Link>
      <div className="p-4 text-center">
        <p className="text-lg font-medium text-gray-800">{product.name}</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
        <div className="mt-4 flex justify-center w-full items-center">
          <button
            onClick={handleAddToWishlist}
            className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <FaHeart className="inline-block mr-2 text-red-700" />
            {addedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;