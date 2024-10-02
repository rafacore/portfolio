"use client";
import React from 'react'
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

interface Props {
    label: string;
    href: string;

}

const Button = ({label, href} :Props) => {
  return (
    <motion.a
    href={href}
    variants={slideInFromLeft(1)}
    className="p-[1.5px] text-center text-white cursor-pointer 
    rounded-lg w-full max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-600/30 transition duration-300"
  >
    <div className=' flex bg-gray-900 rounded-lg h-full w-full items-center justify-center py-5
    group-houver:bg-gradient-to-br group-houver:from-gray-700 group-houver:to-gray-900 transition ease-in-out duration-300
    group-houver:transition group-houver:ease-in-out group-houver:duration-300'>
    {label}
    </div>
  </motion.a>
  )
}

export default Button