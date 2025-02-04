import React from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";

const Page = () => {
  return (
    <main className="bg-[#FFFFFF]">
      <nav className="flex justify-between items-center px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
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
          <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
          <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
          <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
          <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        </div>
      </nav>

      <section className="h-820">
  <div className="p-4 text-black bg-opacity-50">
    <Link href="/" className="hover:underline">
      Home
    </Link>{" "}
    &gt;{" "}
    <Link href="/shop" className="hover:underline">
      Shop
    </Link>{" "}
    <span className="mx-2">|</span>
    <span>Asgaard Sofa</span>
  </div>
</section>

<main className="p-6">
  <section className="flex flex-col md:flex-row gap-6">
    <div className="flex flex-col gap-4">
      <div className="bg-[#FFF9E5] p-2 rounded hover:scale-105 transition duration-300">
        <Image
          src="/images/product/Outdoor sofa set 2.png"
          alt="Outdoor Sofa Set"
          width={120}
          height={120}
          className="object-cover "
        />
      </div>
      <div className="bg-[#FFF9E5] p-2 rounded hover:scale-105 transition duration-300">
        <Image
          src="/images/product/Outdoor sofa set_2 1.png"
          alt="Outdoor Sofa Set Alternate"
          width={120}
          height={120}
          className="object-cover "
        />
      </div>
      <div className="bg-[#FFF9E5] p-2 rounded hover:scale-105 transition duration-300">
        <Image
          src="/images/product/Maya sofa three seater (1) 1.png"
          alt="Maya Sofa"
          width={120}
          height={120}
          className="object-cover "
        />
      </div>
    </div>

    {/* Main Product Image */}
    <div className="bg-[#FFF9E5] p-2 rounded flex-1 flex justify-center items-center">
      <Image
        src="/images/product/Asgaard sofa 3.png"
        alt="Asgaard Sofa"
        width={300}
        height={300}
        className="object-cover rounded shadow-lg hover:scale-105 transition duration-300"
      />
    </div>

    {/* Product Details */}
    <div className="flex-1">
      {/* Product Title and Price */}
      <div className="mb-6">
        <h1 className="text-4xl font-normal">Asgaard Sofa</h1>
        <p className="text-lg text-[#9F9F9F]">Rs. 250,000.00</p>
        <p className="text-sm flex items-center gap-1">
          <FaStar className="text-[#FFDA5B]" />
          <FaStar className="text-[#FFDA5B]" />
          <FaStar className="text-[#FFDA5B]" />
          <FaStar className="text-[#FFDA5B]" />
          <FaStarHalfAlt className="text-[#FFDA5B]" /> {/* Half Star */}
          <span className="text-[#9F9F9F]">({5} Customer Reviews)</span>
        </p>
      </div>

      {/* Product Description */}
      <p className="text-sm text-gray-600 mb-4">
        Setting the bar as one of the loudest speakers in its class, the
        Kilburn is a compact, stout-hearted hero with a well-balanced audio which boosts a clear midrange and extended highs for a sound.
      </p>

      {/* Size Options */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Size</h3>
        <div className="flex gap-2">
          {["L", "XL", "XS"].map((size, index) => {
            const colors = ["#FBEBB5", "#FAF4F4", "#FAF4F4"]; // Define colors for each size
            return (
              <button
                key={size}
                className="px-3 py-1 border rounded hover:bg-[#FFD700] hover:opacity-80 transition duration-300"
                style={{ backgroundColor: colors[index] }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Options */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          {["#816DFA", "#000000", "#CDBA7B"].map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full border hover:scale-110 transition duration-300"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border rounded overflow-hidden">
          <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition duration-300">-</button>
          <input
            type="text"
            defaultValue={1}
            className="w-12 text-center border-l border-r"
          />
          <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition duration-300">+</button>
        </div>
        <button className="bg-white text-black border-[1px] border-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300">
        <Link href="/cart" > Add To Cart </Link>
        </button>
      </div>

      {/* Additional Information */}
      <div className="text-sm text-gray-600 space-y-6">
        {/* SKU Section */}
        <div className="flex items-center">
          <span className="font-semibold w-24">SKU:</span>
          <span>SS001</span>
        </div>

        {/* Category Section */}
        <div className="flex items-center">
          <span className="font-semibold w-24">Category:</span>
          <span>Sofas</span>
        </div>

        {/* Tags Section */}
        <div className="flex items-center">
          <span className="font-semibold w-24">Tags:</span>
          <span>Sofa, Chair, Home, Shop</span>
        </div>

        {/* Share Section */}
        <div className="flex items-center gap-4 mt-4">
          <span className="font-semibold">Share:</span>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300 ease-in-out">
              <FaFacebookF className="text-white hover:text-black text-[18px]" />
            </div>
            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300 ease-in-out">
              <FaLinkedin className="text-white hover:text-black text-[18px]" />
            </div>
            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300 ease-in-out">
              <FaTwitter className="text-white hover:text-black text-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

{/* Description */}

    <main className="  h-744 p-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-t-2 border-gray-200 pt-2">
  <button className="font-medium text-gray-900 pt-1">
    Description
  </button>
  <button className="font-medium text-gray-600 hover:text-gray-900">
    Additional Information
  </button>
  <button className="font-medium text-gray-600 hover:text-gray-900">
    Reviews <span className="text-sm text-gray-500">(5)</span>
  </button>
</div>


      {/* Content Section */}
      <div className="mt-6">
        <p className="text-gray-700">
          Embodying the raw, wayward spirit of rock &apos;n&apos; roll
          the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="mt-4 text-gray-700">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio profile that boasts a clear midrange and
          extended highs for a sound that is both articulate and pronounced.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
  {/* Image 1 */}
  <div className="h-[300px] bg-[#FFF9E5] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <Image
      src="/images/product/Cloud sofa three seater + ottoman_2 1.png"
      alt="Product"
      width={250}
      height={250}
      className="h-full w-full object-cover rounded-lg"
    />
  </div>

  {/* Image 2 */}
  <div className="h-[300px] bg-[#FFF9E5] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <Image
      src="/images/product/Cloud sofa three seater + ottoman_1 1.png"
      alt="Product"
      width={250}
      height={250}
      className="h-full w-full object-cover rounded-lg"
    />
  </div>
</div>

</main>

<div className='bg-white  text-center mt-10'>
        <h2 className=' text-[50px] font-bold h-24 transition-transform duration-300 hover:scale-125 ease-in-out '>Related Products</h2>
      
        </div>
  

{/* related Products */}
<section className="h-auto p-5 flex gap-5 justify-between mx-auto">
      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/TopPicks/Trenton modular sofa_3 1.png"
            alt="Vertical Striped Shirt"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Trenton modular sofa_3</p>
        <p>
          <b className="transition-transform duration-300 hover:scale-125 ease-in-out ">Rs. 25,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/TopPicks/Granite dining table with dining chair 1.png"
            alt="Courage Graphic T-shirt"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Granite dining table with dining chair</p>
        <p>
          <b >Rs. 25,000.00</b>
        </p>

       
      </div>

      <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/TopPicks/Outdoor bar table and stool 1.png"
            alt="Loose Fit Bermuda Shorts"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Outdoor bar table and stool</p>
        <p>
          <b >Rs. 25,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#ffffff] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
        <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src="/images/TopPicks/Plain console with teak mirror 1.png"
            alt="COLLAR T-SHIRT BLUE"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Plain console with teak mirror</p>
        <p>
          <b >Rs. 25,000.00</b>
        </p>

       
      </div>
    </section>
    <div className="flex justify-center">
      <button className="text-center px-6 py-5 mt-2 text-black font-semibold border-b-2 border-black hover:text-gray-700 transition-transform duration-300 hover:scale-125 ease-in-out">
        View More
      </button>
    </div>

    <Footer />
    <FooterScale />

    </main>

  );
};

export default Page;
