import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";

const Page = () => {
  return (
    <main>
      <nav className="h-100 flex justify-between items-center px-6 md:px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
        <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
          <Image src="/images/contact/logo.png" alt="image" width={40} height={40} />
        </div>
        <ul className="flex space-x-6 text-[12px] sm:text-[14px] text-[#000000]">
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
          <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
          <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        </div>
      </nav>

      <section
        className="relative w-full h-316 bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/contact/Rectangle 1.png')",
        }}
      >
        <div className="z-10 text-center flex flex-col justify-center items-center text-[#000000]">
          <Image src="/images/contact/logo.png" alt="image" width={77} height={77} />
          <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Cart</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>Cart</span>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] w-full p-6">
        <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto">
          {/* Cart Items Table */}
          <div className="w-full md:w-[65%] bg-[#FFFFFF] shadow-lg rounded-lg p-6 mb-6 md:mb-0">
            <table className="w-full text-left text-sm text-gray-500">
              <thead>
                <tr className="border-b bg-[#FFF9E5] text-[#000000] uppercase text-xs">
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Subtotal</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-[12px]">
                  <td className="py-4 px-4 flex items-center space-x-4">
                    <Image
                      src="/images/cart/Asgaard sofa 2.png"
                      alt="Product"
                      width={113}
                      height={92}
                      className="w-16 h-16 rounded bg-[#FBEBB5]"
                    />
                    <span className="text-[#9F9F9F] font-normal">Asgaard Sofa</span>
                  </td>
                  <td className="py-4 px-4 text-[#9F9F9F]">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-12 border rounded text-center"
                    />
                  </td>
                  <td className="py-4 px-4 text-[#000000]">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <button className="text-[#B88E2F] h-8 w-8 hover:text-red-700">
                      <AiTwotoneDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="w-full md:w-[30%] bg-[#FFF9E5] shadow-lg rounded-lg p-6 flex flex-col items-center text-[12px]">
            <h2 className="text-[#000000] text-xl font-bold mb-4 text-center">
              Cart Totals
            </h2>
            <div className="space-y-4 w-full">
              <div className="flex justify-between w-full text-[#9F9F9F]">
                <span>Subtotal</span>
                <span className="font-medium text-[#9F9F9F]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between w-full text-gray-800 font-bold">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>

            <button className="w-full h-[58.95px] mt-6 border-2 border-black text-[#000000] py-2 rounded hover:bg-[#FBEBB5]">
              <Link href="/checkout">Check Out</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF4F4] py-8 flex justify-evenly items-center w-full">
        <div className="text-left">
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-xs sm:text-sm text-[#9F9F9F]">For all orders over $50, consectetur <br /> adipim scing elit.</p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">90 Days Return</h3>
          <p className="text-xs sm:text-sm text-[#9F9F9F]">If goods have problems, consectetur <br /> adipim scing elit.</p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-xs sm:text-sm text-[#9F9F9F]">100% secure payment, consectetur <br /> adipim scing elit.</p>
        </div>
      </section>

      <Footer />
      <FooterScale />
    </main>
  );
};

export default Page;




