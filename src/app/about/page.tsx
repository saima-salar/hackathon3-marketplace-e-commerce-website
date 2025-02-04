"use client";

import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";
import { useCart } from "../context/CartContext"; // Import useCart
import { useWishlist } from "../context/WishlistContext"; // Import useWishlist

const AboutPage = () => {
  const { cart } = useCart(); // Access cart from context
  const { wishlist } = useWishlist(); // Access wishlist from context
  return (
    <main>
      {/* <nav className="flex justify-between items-center px-6 py-4 bg-white drop-shadow-lg">
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
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/">About</Link></li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="flex space-x-4">
          <Link href="/account">
            <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
          </Link>
          <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
          <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
          <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        </div>
      </nav> */}
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
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
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
      <section className="relative h-[500px] w-full flex items-center justify-center bg-[#FFFFFF]">
        <div className="absolute inset-0">
          <Image
            src="/images/about/Rectangle 15.png"
            alt="Background"
            layout="fill"
            className="object-cover opacity-60"
          />
        </div>
        <div className="z-10 text-center flex flex-col items-center">
          <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
            <Image
              src="/images/contact/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="hover:opacity-80"
            />
          </div>
          <h1 className="text-5xl mb-4 font-bold text-[#000000] transition-transform duration-300 hover:scale-110">
            Design Studio
          </h1>
          <p className="text-lg text-[#000000]">
            Going all-in with millennial design
          </p>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>About</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {/* Product 1 */}
        <div className="relative h-[300px] bg-[#FFFFFF] rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Image
            src="/images/about/Asgaard sofa 3.png"
            alt="Product 1"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product 2 */}
        <div className="relative h-[300px] bg-[#FFFFFF] rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Image
            src="/images/about/Outdoor bar table and stool 1.png"
            alt="Product 2"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product 3 */}
        <div className="relative h-[300px] bg-[#FFFFFF] rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Image
            src="/images/about/Reclaimed teak Sideboard 1.png"
            alt="Product 3"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Instagram Section */}
      <section
        className="h-[450px] w-full flex items-center justify-center mt-6"
        style={{
          backgroundImage: `url('/images/instagram/Rectangle 17.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center p-5">
          <h1 className="text-5xl font-bold mb-3 transition-transform duration-300 hover:scale-125 ease-in-out">
            Our Instagram
          </h1>
          <p className="text-[#000000] mb-4">Follow our store on Instagram</p>
          <button className="bg-[#FAF4F4] text-[#000000] h-12 w-30 md:w-48 rounded-3xl shadow-md flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
            <span>Follow Us</span>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] py-8 flex justify-evenly items-center w-full">
        <div className="text-left">
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-xs text-[#9F9F9F]">
            For all orders over $50, consectetur <br /> adipim scing elit.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">90 Days Return</h3>
          <p className="text-xs text-[#9F9F9F]">
            If goods have problems, consectetur <br /> adipim scing elit.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-xs text-[#9F9F9F]">
            100% secure payment, consectetur <br /> adipim scing elit.
          </p>
        </div>
      </section>

      <Footer />
      <FooterScale />
    </main>
  );
};

export default AboutPage;
