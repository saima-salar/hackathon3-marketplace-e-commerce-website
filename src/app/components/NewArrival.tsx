import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const NewArrival = () => {
  return (
    <main className="bg-[#FFF9E5] h-639 w-1476 flex flex-row lg:flex-row items-center justify-between px-8 py-15">
      
      {/* Image Section */}
      <div className="mb-8 lg:mb-0">
        <Image
          src="/images/Asgaard sofa 1.png"
          alt="Rocket single seater"
          width={550}
          height={600}
          layout="intrinsic"
        />
      </div>
      
      {/* Text Section */}
      <div className="text-center mr-9 lg:text-left">
        <p className="text-xl font-semibold">New Arrival</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2"> 
         Asgaard sofa</h1>
        <br /><br />
        <button className='border-2 border-black px-14 py-3 mt-1 text-lg transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/product">  Order Now</Link></button>
      </div>
    </main>
  )
}

export default NewArrival;
