import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown';

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center text-center gap-8 p-5">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        {/* <CountDown/> */}
        <button className='bg-red-500 text-white rounded-md'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative w-full">
        <Image
          src="/offerProduct.png"
          alt="offer-image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Offer
