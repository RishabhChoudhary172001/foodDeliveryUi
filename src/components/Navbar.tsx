'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from "./Menu"

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      <div>
        <Link className='text-xl' href="/">MASSIMO</Link>
      </div>
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar
