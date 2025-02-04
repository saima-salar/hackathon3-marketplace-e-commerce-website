
"use client"

import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled, MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";
import { useCart } from "../context/CartContext"; // Import useCart
import { useWishlist } from "../context/WishlistContext"; // Import useWishlist


const ContactPage = () => {

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
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out"><Link href="/about">About</Link></li>
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
         
      <section
        className="relative w-full h-316 bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/contact/Rectangle 1.png')",
        }}
      >
        <div className="z-10 text-center flex flex-col justify-center items-center text-[#000000]">
          <Image
            src="/images/contact/logo.png"
            alt="image"
            width={77}
            height={77}
          />
          <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Contact</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>Contact</span>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-20 p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-[30px] md:text-[50px] font-bold h-auto mb-4 transition-transform duration-300 hover:scale-125 ease-in-out">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">
              For More Information About Our Product & Services. Please Feel Free
              To Drop Us <br />An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FaLocationDot /> Address
                </h3>
                <p className="text-gray-600 text-base">
                  236 5th SE Avenue, New <br />
                  York NY10000, United <br />
                  States
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FaPhoneAlt /> Phone
                </h3>
                <p className="text-gray-600 text-base">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MdAccessTimeFilled /> Working Time
                </h3>
                <p className="text-gray-600 text-base">
                  Monday-Friday: 9:00 <br />
                  22:00 <br />
                  Saturday-Sunday: 9:00 <br />
                  21:00
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 ml-0">
              <div>
                <label className="block font-medium text-base text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Hi! i’d like to ask about"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 py-2 text-[#000000] border-[1px] border-black bg-white rounded-2xl hover:bg-[#FBEBB5]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

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

export default ContactPage;