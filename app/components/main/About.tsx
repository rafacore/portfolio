import React from 'react'
import Image from 'next/image'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";

const About = () => {
  return (
    <div id="about" className="h-full w-full flex flex-col  gap-10 px-10 item-center">
    <div  className="relative h-[300px] flex flex-row self-center justify-between rounded-full overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[50%]">


    <div className="relative p-4 ">
      <h1 className="text-2xl font-semibold text-white mb-5"> Letme introduce myself</h1>
      <p className="mt-2 text-gray-300 mb-5"> I’m a Software Developer with over 7 years of experience, passionate about creating exceptional user experiences and mastering the entire development process—from initial design to final testing. My focus is on building intuitive, high-performance web applications that blend strong UI/UX principles with technical precision.
      </p>
<div>
      <ul className='text-white mt-10 flex gap-5' >
        <li> <a href=''> <RxGithubLogo size={30}/></a></li>
        <li><a href=""><RxLinkedinLogo size={30}/></a></li>
      </ul>
</div>
    </div>
    <Image
      src="/NextWebsite.png"
      alt="alt"
      width={300}
      height={300}
      className=" rounded-full object-contain"
    />
  </div>
  </div>
  )
}

export default About