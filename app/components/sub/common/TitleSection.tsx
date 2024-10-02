"use client";

import { string } from 'prop-types'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

interface Props {
title: string;
subTitle?:string;
featuredText?: string;
}
const TitleSection = ({title, subTitle, featuredText}: Props) => {
  return (

    <div className='w-full h-auto flex flex-col items-center justify-center'>
       {featuredText &&  <motion.div
                  variants={slideInFromTop}
                  className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                  <h1 className="Welcome-text text-[13px]">
                    {featuredText}
                  </h1>
                </motion.div>
       }
                <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  font-semibold mt-[10px] text-center mb-[15px]'
                >
                {title}
                </motion.div>
                <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
                >
                    {subTitle}
                </motion.div>
            </div>

  )
}

export default TitleSection