'use client'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'

const data = [
    {
        id:1,
        title:"always fresh & always crispy & always hot",
        image:"/slide1.png",
    },
    {
        id:2,
        title:"we deliver your order wherever you are in NY",
        image:"/slide2.jpg",
    },
    {
        id:3,
        title:"the best pizza to share with your family",
        image:"/slide3.jpg",
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(()=> setCurrentSlide((prev) => (prev === data.length-1 ? 0 : prev + 1)),4000)
    //     return () => clearInterval(interval);
    // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* Text Container */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className='text-2xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white md:px-8 md:py-4 px-4 py-2'>Order Now</button>
      </div>
      <div className='relative flex-1 w-full'>
        <Image src={data[currentSlide].image} alt="carousel" className='object-cover' fill/>
      </div>
    </div>
  )
}

export default Slider
