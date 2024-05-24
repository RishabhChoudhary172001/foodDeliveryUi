'use client'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

const Logo = () => {
  return (
     <motion.div
      whileHover={{
        textShadow: "0px 0px 8px rgba(0,0,0,0.2)",
        color: "#f00",
        transition: { duration: 0.3 }
      }} className="md:font-bold text-xl flex-1 md:text-center">
      <Link href="/">MASSIMO</Link>
    </motion.div>
  );
}

export default Logo
