import React from 'react'
import Image from "next/image";

const CartIcon = () => {
  return (
    <div className='flex flex-row gap-3 text-center items-center'>
      <div className="relative md:h-5 md:w-5 h-8 w-8">
        <Image src="/cart.png" alt="cart" fill/>
      </div>
      <span>Cart(5)</span>
    </div>
  )
}

export default CartIcon
