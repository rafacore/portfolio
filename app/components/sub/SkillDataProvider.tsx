"use client"; 
//  import { useInView } from '@react-spring/core';
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    alt: string;
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({alt, src, width, height, index,} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    const imageVariants ={
        hidden: {opacity: 0 },
        visible: {opacity: 1}
    }

    const animationDelay = 0.3

return(
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden" }
    custom={index}
    transition={{delay: index * animationDelay}}
    >
        <Image 
        src={src}
        width={width}
        height={height}
        alt={alt}
        />
    </motion.div>
)}



export default SkillDataProvider;