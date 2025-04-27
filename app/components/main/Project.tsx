"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import { PROJECTS } from "../../../constants/index";
import TitleSection from "../sub/common/TitleSection";

const Project = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-12"
      id="projects"
    >
      <TitleSection
        title="Projects"
        subTitle="My Latest Work"
        featuredText="Featured Projects"
      />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            git={project.git}
            live={project.live}
            tech={project.tech}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
