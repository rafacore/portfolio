import React from "react";
import HeroContent from "../sub/HeroContent";
import StarCanvas from "./StarBackground";
import CodeGalaxyBackground from "./CodeGalaxyBackground";
// import BlackHole from '../../public/public_blackhole.webm';

const Hero  = ( )=> {
    return(
        <div className="relative flex flex-col h-full w-full ">
            
            {/* <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video> */}
            <div className="">
            {/* <StarCanvas /> */}
            <CodeGalaxyBackground/>

            </div>
         
            <HeroContent/>
            {/* <img src="/blackhole.webm"/> */}
        </div>
    )
}

export default Hero
