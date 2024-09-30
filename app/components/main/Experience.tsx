import React from "react";
import TimeLine from "../sub/TimeLine";
import { experiences } from "@/constants";
import TitleSection from "../sub/common/TitleSection";
import Button from "../sub/common/Button";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <TitleSection title="Experiences" subTitle="My last jobs" />
      <TimeLine />

      <div className="flex w-full items-center justify-center">
        <Button label="Resume" />
      </div>
    </section>
  );
};

export default Experience;
