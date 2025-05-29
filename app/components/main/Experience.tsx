"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants";
import TitleSection from "../sub/common/TitleSection";
import Button from "../sub/common/Button";

const TimelineItem = ({ experience, index }: any) => {
  // Responsive animation variants
  const variants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? 50 : -50,
      // On mobile, all items come from the right
      '@media (max-width: 768px)': {
        x: 50
      }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    hover: { 
      opacity: 1, 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(112,66,248,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`timeline-item ${index % 2 === 0 ? 'from-right' : 'from-left'}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="timeline-content backdrop-blur-sm bg-[#0300145e] rounded-xl p-4 sm:p-6 border border-[#7042f861] w-full
        shadow-[0_0_15px_rgba(112,66,248,0.1)] transition-all duration-300"
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
      >
        <div className="company bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent text-base sm:text-xl font-bold mb-1 sm:mb-2">
          {experience.company}
        </div>
        <div className="details relative overflow-hidden text-gray-300 flex flex-wrap flex-col gap-1 sm:gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{experience.title}</h3>
          <p className="text-sm sm:text-base text-gray-400">{experience.duration}</p>
          <p className="text-sm sm:text-base text-gray-300">{experience.description}</p>
          <motion.ul 
            className="flex flex-wrap gap-1 sm:gap-2 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {experience.stack.map((tech: string, idx: number) => (
              <motion.li
                key={idx}
                className="rounded-full px-2 sm:px-4 py-1 text-xs sm:text-sm bg-[#7042f818] text-[#7042f8] border border-[#7042f861]"
                whileHover={{ scale: 1.05, backgroundColor: "#7042f830" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
      <motion.div 
        className="timeline-point w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10"
    >

      <TitleSection
        title="Experience"
        // subTitle="My Professional Journey"
        // featuredText="7+ years of experience"
      />

      <motion.div 
        className="timeline relative w-full max-w-[1000px] mt-4 sm:mt-8 md:mt-10 px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-20 md:block hidden" />
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-20 md:hidden block" />
      </motion.div>

      <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-4 sm:gap-10 mt-10 sm:mt-16 md:mt-20">
        <Button label="Resume" href="#" />
        <Button label="Contact Me" href="#" />
      </div>
    </section>
  );
};

export default Experience;
