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

}

const Button = ({label} :Props) => {
  return (
    <motion.a
    variants={slideInFromLeft(1)}
    className="py-2 text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500"
  >
    {label}
  </motion.a>
  )
}

export default Button