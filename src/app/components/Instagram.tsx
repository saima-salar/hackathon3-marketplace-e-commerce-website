import React from 'react';

const Instagram = () => {
  return (
    <div
      className="h-450 w-1440 flex items-center justify-center mt-6"
      style={{
        backgroundImage: `url('/images/instagram/Rectangle 17.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center p-5">
        <h1 className="text-5xl font-bold mb-3  transition-transform duration-300 hover:scale-125 ease-in-out ">Our Instagram</h1>
        <p className="text-[#000000] mb-4">Follow our store on Instagram</p>
        <button className="bg-[#FAF4F4] text-[#000000] h-12 w-30 md:w-48 rounded-3xl shadow-md flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
  <span>Follow Us</span>
</button>

      </div>
    </div>
  );
};

export default Instagram;
