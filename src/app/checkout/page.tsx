import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";

const Page = () => {
  return (
    <main>
      {/* Navbar */}
      <nav className="h-100 flex justify-between items-center px-6 sm:px-10 py-4 bg-white drop-shadow-lg">
        <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
          <Image src="/images/contact/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <ul className="hidden sm:flex space-x-4 md:space-x-6 text-sm md:text-base text-black">
          <li className="transition duration-300 hover:scale-125 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="transition duration-300 hover:scale-125 ease-in-out">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="transition duration-300 hover:scale-125 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="transition duration-300 hover:scale-125 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link href="/account">
            <FaRegUser className="text-black text-xl transition duration-300 hover:scale-125 ease-in-out cursor-pointer" />
          </Link>
          <IoSearch className="text-black text-xl transition duration-300 hover:scale-125 ease-in-out cursor-pointer" />
          <FaRegHeart className="text-black text-xl transition duration-300 hover:scale-125 hover:text-red-700 ease-in-out cursor-pointer" />
          <MdOutlineShoppingCart className="text-black text-xl transition duration-300 hover:scale-125 ease-in-out cursor-pointer" />
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
          <Image
            src="/images/contact/logo.png"
            alt="image"
            width={77}
            height={77}
          />
          <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Checkout</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>Checkout</span>
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Billing Details */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border rounded p-2 w-full" />
                <input type="text" placeholder="Last Name" className="border rounded p-2 w-full" />
              </div>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="border rounded p-2 w-full"
              />
              <select className="border rounded p-2 w-full">
                <option>Country / Region</option>
                <option>Sri Lanka</option>
                <option>United States</option>
                <option>India</option>
              </select>
              <input type="text" placeholder="Street Address" className="border rounded p-2 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Town / City" className="border rounded p-2 w-full" />
                <input type="text" placeholder="Province" className="border rounded p-2 w-full" />
                <input type="text" placeholder="ZIP Code" className="border rounded p-2 w-full" />
              </div>
              <input type="text" placeholder="Phone" className="border rounded p-2 w-full" />
              <input type="email" placeholder="Email Address" className="border rounded p-2 w-full" />
              <textarea
                placeholder="Additional Information"
                className="border rounded p-2 w-full"
                rows={4}
              ></textarea>
            </form>
          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-bold">Product</h2>
              <h2 className="text-lg font-bold">Subtotal</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Asgaard Sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <label className="block">
                <input type="radio" name="payment" className="mr-2" />
                Direct Bank Transfer
              </label>
              <label className="block">
                <input type="radio" name="payment" className="mr-2" />
                Cash on Delivery
              </label>
            </div>
            <button className="w-full bg-black text-white py-2 rounded mt-6 hover:bg-gray-800">
              Place Order
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#FAF4F4] py-8 flex flex-col md:flex-row justify-evenly items-center w-full">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-xs text-gray-500">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">90 Days Return</h3>
          <p className="text-xs text-gray-500">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-xs text-gray-500">
            100% secure payment, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </section>

      <Footer />
      <FooterScale />
    </main>
  );
};

export default Page;
