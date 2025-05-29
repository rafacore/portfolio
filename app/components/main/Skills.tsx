"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React, { useState } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Background animation elements
  const backgroundElements = Array.from({ length: 20 }, (_, i) => i);

  // Filter skills based on active tab
  const getFilteredSkills = () => {
    switch (activeTab) {
      case "frontend":
        return Frontend_skill;
      case "backend":
        return Backend_skill;
      default:
        return Skill_data;
    }
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-4 sm:px-6 md:px-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {backgroundElements.map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#2A0E61] bg-opacity-30"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <SkillText />

      {/* Tab navigation */}
      <motion.div 
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-3 mt-6 mb-10"
      >
        <TabButton 
          active={activeTab === "all"} 
          onClick={() => setActiveTab("all")}
          label="All Skills"
        />
        <TabButton 
          active={activeTab === "frontend"} 
          onClick={() => setActiveTab("frontend")}
          label="Frontend"
        />
        <TabButton 
          active={activeTab === "backend"} 
          onClick={() => setActiveTab("backend")}
          label="Backend"
        />
      </motion.div>

      {/* Skills grid with animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-10 w-full max-w-6xl"
      >
        {getFilteredSkills().map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            alt={skill.skill_name}
          />
        ))}
      </motion.div>
    </section>
  );
};

// Tab button component
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, label }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${active 
        ? "bg-[#2A0E61] text-white border border-[#7042f88b]" 
        : "bg-opacity-10 bg-[#2A0E61] text-gray-300 border border-gray-700 hover:border-[#7042f88b]"}`}
    >
      {label}
    </motion.button>
  );
};

export default Skills;
