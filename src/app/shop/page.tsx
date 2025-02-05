// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react"; // Add useState and useEffect hooks
// import Footer from "../components/Footer";
// import FooterScale from "../components/FooterScale";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import ProductListing from "../components/ProductListing";
// import SearchFilter from "../components/SearchFilter";
// import Pagination from "../components/Pagination";

// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] | order(_createdAt desc)[0...9]{
//     category,
//     "id": _id,
//     price,
//     description,
//     stockLevel,
//     discountPercentage,
//     isFeaturedProduct,
//     name,
//     image
//   }`;

//   const products = await client.fetch(query);
//   return products;
// }

// const Page = () => {
//   const [products, setProducts] = useState<Product[]>([]); // Initialize products state
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Initialize filtered products state
//   const [currentPage, setCurrentPage] = useState<number>(1); // Current page
//   const itemsPerPage = 12; // Number of items per page
//   const totalPages = 6; // Fixed total number of pages
//   const [loading, setLoading] = useState<boolean>(true); // Loading state


//   // Fetch products and update the state
//   useEffect(() => {
//     const getProducts = async () => {
//       const fetchedProducts = await fetchProducts();
//       setProducts(fetchedProducts);
//       setFilteredProducts(fetchedProducts); // Initialize filtered products
//       setLoading(false); // Set loading to false once the products are fetched
//     };

//     getProducts();
//   }, []); // Empty dependency array ensures this runs only once on component mount

//   // Handle filtering
//   const handleFilter = (filtered: Product[]) => {
//     setFilteredProducts(filtered); // Store filtered products in state
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Display loading message while fetching data
//   }

//   return (
//     <main className="w-full">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-6 py-4 bg-white drop-shadow-lg">
//         <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
//           <Image src="/images/contact/logo.png" alt="Logo" width={40} height={40} />
//         </div>
//         <ul className="flex space-x-6 text-[14px] text-[#000000]">
//           <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
//             <Link href="/shop">Shop</Link>
//           </li>
//           <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
//             <Link href="/about">About</Link>
//           </li>
//           <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section
//         className="relative w-full h-316 bg-cover bg-center flex flex-col justify-center items-center"
//         style={{
//           backgroundImage: "url('/images/contact/Rectangle 1.png')",
//         }}
//       >
//         <div className="z-10 text-center flex flex-col justify-center items-center text-[#000000]">
//           <Image
//             src="/images/contact/logo.png"
//             alt="Logo"
//             width={77}
//             height={77}
//           />
//           <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Shop</h1>
//           <div className="p-4 text-[#000000] bg-opacity-50">
//             <Link href="/">Home</Link> &gt; <span>Shop</span>
//           </div>
//         </div>
//       </section>

//       {/* Search and Sort Section */}
//       <SearchFilter products={products} onFilter={handleFilter} />

//       {/* ProductListing Section */}
//       <section className="w-full h-auto py-4">
//         <h2 className='text-[#000000] text-[50px] text-center font-bold h-27 pb-8 transition-transform duration-300 hover:scale-125 ease-in-out '>Product Listing</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {filteredProducts.map((product: Product) => (
//             <ProductListing key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

 
//       {/* Pagination Section */}
//       <section className="py-4 flex justify-center">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(page: number) => setCurrentPage(page)}
//         />
//       </section>


//       {/* Features Section */}
//       <section className="bg-[#FAF4F4] py-8 flex justify-evenly items-center w-full">
//         <div className="text-left">
//           <h3 className="text-xl font-semibold">Free Delivery</h3>
//           <p className="text-xs text-[#9F9F9F]">
//             For all orders over $50, consectetur <br /> adipiscing elit.
//           </p>
//         </div>
//         <div className="text-left">
//           <h3 className="text-xl font-semibold">90 Days Return</h3>
//           <p className="text-xs text-[#9F9F9F]">
//             If goods have problems, consectetur <br /> adipiscing elit.
//           </p>
//         </div>
//         <div className="text-left">
//           <h3 className="text-xl font-semibold">Secure Payment</h3>
//           <p className="text-xs text-[#9F9F9F]">
//             100% secure payment, consectetur <br /> adipiscing elit.
//           </p>
//         </div>
//       </section>

//       <Footer />
//       <FooterScale />
//     </main>
//   );
// };

// export default Page;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";
import { client } from "../../sanity/lib/sanity";
import ProductListing from "../components/ProductListing";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import ProductDetail from "../components/ProductDetail";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useWishlist } from "../context/WishlistContext";  // Import useWishlist
import { useCart } from "../context/CartContext";  // Import useCart


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: { asset: { _ref: string } };
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
}

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(_createdAt desc){
    category,
    "id": _id,
    price,
    description,
    stockLevel,
    discountPercentage,
    isFeaturedProduct,
    name,
    image
  }`;

  const products = await client.fetch(query);
  return products;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // All products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtered products
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page
  const itemsPerPage = 12; // Items per page
  const totalPages = 6; // Fixed number of pages
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const { wishlist } = useWishlist();  // Access wishlist from context
    const { cart } = useCart();  // Access cart from context


  // Fetch products on mount
  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts.slice(0, totalPages * itemsPerPage)); // Limit to 6 pages of items
      setLoading(false); // Stop loading
    };

    getProducts();
  }, []);

  // Handle product filtering
  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered.slice(0, totalPages * itemsPerPage)); // Limit filtered items
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white drop-shadow-lg">
        <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
          <Image 
            src="/images/contact/logo.png" 
            alt="image" 
            width={40} 
            height={40} 
          />
        </div>
        <ul className="flex space-x-6 text-[14px] text-[#000000]">
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/">Home</Link></li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/shop">Shop</Link></li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/about">About</Link></li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="flex space-x-4">
          <Link href="/account">
            <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
          </Link>
          <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
          
          {/* <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
           */}
 {/* Wishlist Icon with Wishlist Count */}
 <Link href="/wishlist" className="relative">
          <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>




        
          {/* <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" /> */}

 {/* Shopping Cart Icon with Cart Count */}
 <Link href="/cartpage" className="relative">
          <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>



        </div>
      </nav>

      

      {/* Hero Section */}
      <section
        className="relative w-full h-316 bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/contact/Rectangle 1.png')",
        }}
      >
        <div className="z-10 text-center flex flex-col justify-center items-center text-[#000000]">
          <Image src="/images/contact/logo.png" alt="Logo" width={77} height={77} />
          <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Shop</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>Shop</span>
          </div>
        </div>
      </section>

{/* ProductDetail Section */}
<section className="w-full h-auto py-4">
  <h2 className='text-[#000000] text-[50px] text-center font-bold h-27 pb-8 transition-transform duration-300 hover:scale-125 ease-in-out'>Product Details</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {filteredProducts.slice(0, 9).map((product: Product) => (
      <ProductDetail key={product.id} product={product} />
    ))}
  </div>
</section>


      {/* Search and Sort Section */}
      <SearchFilter products={products} onFilter={handleFilter} />

      {/* Product Listing */}
      <section className="w-full h-auto py-4">
        <h2 className="text-[#000000] text-[50px] text-center font-bold h-27 pb-8 transition-transform duration-300 hover:scale-125 ease-in-out">
          Product Listing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedProducts.map((product: Product) => (
            <ProductListing key={product.id} product={product} />

            
          ))}
        </div>
        
      </section>






      {/* Pagination */}
      <section className="py-4 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </section>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] py-8 flex justify-evenly items-center w-full">
        <div className="text-left">
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-xs text-[#9F9F9F]">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">90 Days Return</h3>
          <p className="text-xs text-[#9F9F9F]">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-xs text-[#9F9F9F]">
            100% secure payment, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </section>

      <Footer />
      <FooterScale />
    </main>
  );
};

export default ShopPage;