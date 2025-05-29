"use client"; 
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    alt: string;
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ alt, src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    
    // Enhanced animation variants
    const imageVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            scale: 0.8 
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center p-2 sm:p-4"
        >
            <motion.div
                whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#0A0A0A] bg-opacity-80 rounded-xl p-3 sm:p-5 border border-[#2A0E61] hover:border-[#7042f88b] shadow-lg hover:shadow-[#4422aa22] transition-all duration-300"
            >
                <Image 
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className="object-contain"
                />
            </motion.div>
            <motion.p 
                className="text-gray-300 text-xs sm:text-sm mt-2 text-center font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: index * 0.15 + 0.2 }}
            >
                {alt}
            </motion.p>
        </motion.div>
    )
}

export default SkillDataProvider;