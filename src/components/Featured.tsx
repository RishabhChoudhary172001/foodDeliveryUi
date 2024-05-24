import Image from "next/image";
import React from "react";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="flex">
      <div className="w-screen overflow-x-scroll text-red-500">
        {/* WRAPPER */}
        <div className="w-max flex items-center justify-center">
          {/* SINGLE ITEM */}
          {featuredProducts.map((item) => (
            <div
              className="w-screen h-[70vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:w-[25vw] lg:h-[90vh]"
              key={item.id} 
            >
              {/* IMAGE CONTAINER */}
              <div className="flex-1 w-full hover:rotate-[60deg] transition-all duration-300 relative">
                {item.img && (
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              {/* TEXT CONTAINER */}
              <div className="flex-1 flex items-center justify-center text-center flex-col gap-4 p-2">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                <p className="p-4">{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                <button className="bg-red-500 text-white p-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
