import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
<section className="w-full max-w-screen-xl h-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 md:px-10 py-16 bg-[#FBEBB5]">
  {/* Left Section */}
  <div className="text-center md:text-left max-w-md space-y-6 md:ml-12 mt-8">
  <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold animate-fadeIn flex md:space-x-2 justify-center md:justify-start">
  <span className="flex-row">Rocket Seater</span>
  <span className="inline-block px-3">Single</span>
</h1>

    <button className="inline-block px-6 py-2 mt-4 text-black font-semibold border-b-2 border-black hover:text-gray-700">
      Shop Now
    </button>
  </div>

  {/* Right Section */}
  <div className="mt-10 md:mt-0 mr-0">
    <Image
      src="/images/Rocket single seater 1.png"
      alt="Rocket single seater sofa"
      className="w-full h-auto max-w-[853px] transform transition duration-700 ease-in-out hover:scale-105 hover:rotate-1"
      width={853}
      height={1000}
    />
  </div>
</section>

  
  
  
  
  );
};

export default Hero;
