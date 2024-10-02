import React from "react";
import Image from "next/image";
import Button from "./common/Button";

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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <ul className="flex flex-wrap">
          {tech?.map((stk) => (
            <li className="rounded-full  px-5 py-1 m-1 text-center  bg-teal-400/10 text-teal-300  text-[0.75em] font-bold ">
              {stk}
            </li>
          ))}
        </ul>
<div className="flex flex-row gap-10 ">
        <Button label="View Project" href={live} />
        <Button label="GitHu source code" href={git} />

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
