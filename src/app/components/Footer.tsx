import React from "react";


const Footer = () => {
  return (

    
    <footer className="bg-[#FFFFFF] w-1440px h-555px  py-8 text-base	 top-4497px ">
      <div className="container mx-auto px-5 md:px-10 flex flex-cols-1 md:grid-cols-4 gap-8 ">
        {/* Contact Section */}
        <div>
         
          <p className="font-medium mb-2 mt-8 text-[#9F9F9F]  ">480 University Drive Suite 200 Coral Gables, 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="font-medium">
          <h5 className=" mb-2 text-[#9F9F9F]  ">Links</h5>
          <ul className="space-y-2">
            <li className="hover:text-[#9F9F9F]  transition-colors text-left">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#9F9F9F] transition-colors text-left">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-[#9F9F9F] transition-colors text-left">
              <a href="#">About</a>
            </li>
            <li className="hover:text-[#9F9F9F] transition-colors text-left">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="font-medium">
          <h5 className="font-bold mb-2 text-[#9F9F9F]  ">Help</h5>
          <ul className="space-y-2">
            <li className="hover:text-[#9F9F9F] transition-colors">
              <a href="#">Payment Options</a>
            </li>
            <li className="hover:text-[#9F9F9F] transition-colors">
              <a href="#">Returns</a>
            </li>
            <li className="hover:text-[#9F9F9F] transition-colors">
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>

    {/* Newsletter Section */}
    <div className="flex flex-col items-center md:items-start">
      <h5 className="font-medium mb-2 text-[#9F9F9F] ">Newsletter</h5>
      <div className="flex w-full md:w-auto items-center gap-2 font-medium">
        <input
          type="email"
          placeholder="Enter your email address"
          className="text-[#9F9F9F] flex-grow px-2 py-2 w-full border-b-[1px] border-black md:w-auto focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="text-black font-medium px-4 py-2 border-b-[1px] border-black hover:bg-gray-800 hover:text-white transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</footer>

     

  );
};




export default Footer;
