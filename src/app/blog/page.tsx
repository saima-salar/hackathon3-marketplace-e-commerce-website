
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import Footer from "../components/Footer"; 
import FooterScale from "../components/FooterScale";


export default function Blog() {

  return (

    <main>
  
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
          <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Blog</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>Blog</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Blog Post 1 */}
          <div className="mb-8 border-b pb-4">
            <Image
              src="/images/blog/pic1.png"
              alt="Millennial Design"
              width={800}
              height={400}
              className="rounded-md"
            />
            <div className="max-w-3xl  mx-auto p-6">
              {/* Blog Post */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <FaUserAlt />
                    Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    14 Oct 2022
                  </span>
                  <span className="flex items-center gap-2">
                    <FaTag />
                    Wood
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices.
                </p>
                <a
                  href="#"
                  className="text-black font-bold border-b border-black hover:text-gray-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="mb-8 border-b pb-4">
            <Image
              src="/images/blog/pic3.png"
              alt="Improving Design Skills"
              width={800}
              height={400}
              className="rounded-md"
            />
            <div className="max-w-3xl mx-auto p-6">
              {/* Blog Post */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <FaUserAlt />
                    Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    14 Oct 2022
                  </span>
                  <span className="flex items-center gap-2">
                    <FaTag />
                    Wood
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices.
                </p>
                <a
                  href="#"
                  className="text-black font-bold border-b border-black hover:text-gray-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="mb-8 border-b pb-4">
            <Image
              src="/images/blog/pic3.png"
              alt="Improving Design Skills"
              width={800}
              height={400}
              className="rounded-md"
            />
            <div className="max-w-3xl mx-auto p-6">
              {/* Blog Post */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <FaUserAlt />
                    Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    14 Oct 2022
                  </span>
                  <span className="flex items-center gap-2">
                    <FaTag />
                    Wood
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices.
                </p>
                <a
                  href="#"
                  className="text-black font-bold border-b border-black hover:text-gray-700"
                >
                  Read more
                </a>
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2">
                <button className="px-4 py-2 rounded bg-[#FBEBB5] text-[#000000] font-bold">
                  1
                </button>
                <button className="px-4 py-2 rounded bg-[#FFF9E5] text-[#000000] hover:bg-[#FBEBB5] hover:font-bold ">
                  2
                </button>
                <button className="px-4 py-2 rounded bg-[#FFF9E5] text-[#000000] hover:bg-[#FBEBB5] hover:font-bold ">
                  3
                </button>
                <button className="px-4 py-2 rounded bg-[#FFF9E5] text-[#000000] hover:bg-[#FBEBB5] hover:font-bold">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="mb-8">
            {/* Search Field */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 19a8 8 0 100-16 8 8 0 000 16zm5.656-5.657L21 21"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Categories */}
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-700 hover:text-black cursor-pointer">
                <span>Crafts</span>
                <span>2</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-black cursor-pointer">
                <span>Design</span>
                <span>8</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-black cursor-pointer">
                <span>Handmade</span>
                <span>7</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-black cursor-pointer">
                <span>Interior</span>
                <span>1</span>
              </li>
              <li className="flex justify-between text-gray-700 hover:text-black cursor-pointer">
                <span>Wood</span>
                <span>6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {/* Recent Post 1 */}
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/blog/pic4.png"
                  alt="Recent Post 1"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Going all-in with millennial design
                  </p>
                  <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
              </li>
              {/* Recent Post 2 */}
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/blog/pic5.png"
                  alt="Recent Post 2"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Exploring new ways <br /> of decorating
                  </p>
                  <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
              </li>
              {/* Recent Post 3 */}
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/blog/pic6.png"
                  alt="Recent Post 3"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Handmade pieces <br /> that took time to make
                  </p>
                  <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
              </li>
              {/* Recent Post 4 */}
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/blog/pic7.png"
                  alt="Recent Post 4"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Modern home in <br /> milan
                  </p>
                  <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
              </li>
              {/* Recent Post 5 */}
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/blog/pic8.png"
                  alt="Recent Post 5"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Colorful Office <br /> redesign
                  </p>
                  <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
              </li>
            </ul>
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
}


