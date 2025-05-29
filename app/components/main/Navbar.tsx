"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Socials } from "../../../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: '#about', label: 'About me' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
    ];

    const menuVariants = {
        hidden: { 
            opacity: 0,
            y: -20,
            x: '100%'
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            x: '100%',
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <nav className='w-full h-[65px] fixed top-0 shadow-lg backdrop-blur-md z-50 px-4 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
                <a
                    href='#about-me'
                    className='h-auto w-auto flex flex-row items-center'
                >
                    <span className='font-bold text-gray-300 text-lg md:text-xl'>
                        &lt; Rafael Dev /&gt;
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center'>
                    <div className='flex items-center justify-between gap-8 px-6 py-2 rounded-full bg-[#0300145e] text-gray-200'>
                        {menuItems.map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                className='cursor-pointer hover:text-purple-500 transition-colors'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className='md:hidden flex flex-col gap-1.5 p-2 z-50'
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        className='w-6 h-0.5 bg-gray-300 block'
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className='w-6 h-0.5 bg-gray-300 block'
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className='w-6 h-0.5 bg-gray-300 block'
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='fixed inset-0 top-[65px] bg-[#030014]/90 backdrop-blur-md md:hidden'
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className='flex flex-col items-center justify-center h-full gap-8 p-4'>
                                {menuItems.map((item, i) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        className='text-xl font-medium text-gray-200 hover:text-purple-500 transition-colors'
                                        variants={itemVariants}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}                                
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;