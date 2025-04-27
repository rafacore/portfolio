"use client";

import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  tech?: string[];
  git: string;
  live: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  tech,
  git,
  live,
}: Props) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]
        bg-[#0300145e] backdrop-blur-sm group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0300145e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <motion.div 
        className="relative p-6 flex flex-col gap-4"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-gray-300">{description}</p>

        <motion.ul 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {tech?.map((stk, index) => (
            <motion.li
              key={index}
              className="rounded-full px-4 py-1 text-sm bg-[#7042f818] text-[#7042f8] border border-[#7042f861]"
              whileHover={{ scale: 1.05, backgroundColor: "#7042f830" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {stk}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div 
          className="flex flex-row gap-4 mt-2"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          <Button label="View Project" href={live} />
          <Button label="GitHub" href={git} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
