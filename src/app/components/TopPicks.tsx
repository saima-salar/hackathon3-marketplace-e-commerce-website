import React from "react";
import Image from "next/image";

const TopPicks = () => {
  return (
    <section className="h-777  w-1440 p-5 flex gap-5 justify-between mx-auto">
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
          <b className="transition-transform duration-300 hover:scale-125 ease-in-out ">
            Rs. 25,000.00
          </b>
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
        <p className="font-normal mt-2">
          Granite dining table with chair
        </p>
        <p>
          <b>Rs. 25,000.00</b>
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
          <b>Rs. 25,000.00</b>
        </p>
      </div>

      <div className="bg-[#FFFFFF] w-1440 h-750 flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
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
          <b>Rs. 25,000.00</b>
        </p>
      </div>
    </section>
  );
};

export default TopPicks;
