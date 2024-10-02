import React from "react";
import { experiences } from "@/constants";
interface Exp {
  company: String;
  title: String;
  duration: String;
  description: String;
  stack: string[]
}
const TimeLine = () => {
  return (
    <div className="timeline">
      {experiences?.map((exp, index) => (
        <div className="timeline-item ">
          <div className="timeline-content">
            <div className="company">{exp.company}</div>
            <div className="details  relative overflow-hidden text-gray-300 flex flex-wrap  flex-col gap-2 ">
              <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
              <p>{exp.duration} </p>
              <p>{exp.description}</p>
              <ul className="flex flex-wrap" >{exp.stack.map((stk) => (
                <li className="rounded-full  px-5 py-1 m-1 text-center  bg-teal-400/10 text-teal-300  text-[0.75em] font-bold ">
                  {stk}</li>
                ))}
                
                </ul>
            </div>
          </div>
          <div className="timeline-point"></div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
