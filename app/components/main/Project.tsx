import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { PROJECTS } from "../../../constants/index";

const Project = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            src={project.src}
            title={project.title}
            description={project.description}
            git={project.git}
            live={project.live}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
