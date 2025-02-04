
"use client"

import { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";  // Import useCart
import { useWishlist } from "../context/WishlistContext";  // Import useWishlist

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();  // Access cart from context
  const { wishlist } = useWishlist();  // Access wishlist from context

  return (
    <nav className="h-100 flex justify-between items-center px-10 py-4 bg-[#FBEBB5] drop-shadow-lg">
      {/* Logo */}
      <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
        <Image src="/images/contact/logo.png" alt="image" width={40} height={40} />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-[14px] text-[#000000]">
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

      {/* Icons */}
      <div className="flex space-x-4">
        <Link href="/account">
          <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
        </Link>
        <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        
        {/* Wishlist Icon with Wishlist Count */}
        <Link href="/wishlist" className="relative">
          <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>
        
        {/* Shopping Cart Icon with Cart Count */}
        <Link href="/cartpage" className="relative">
          <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        <HiOutlineMenuAlt3
          className="text-black text-[24px] md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white/80 backdrop-blur-md shadow-md rounded-lg p-4 md:hidden">
      

          <ul className="space-y-4 text-[14px] text-[#000000]">
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
        </div>
      )}
    </nav>
  );
}
