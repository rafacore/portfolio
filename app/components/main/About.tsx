import React from 'react'
import Image from 'next/image'
import {
    RxGithubLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

const About = () => {
  return (
    <div id="about" className="h-full w-full flex flex-col gap-10 px-4 sm:px-6 md:px-10 py-16 items-center">
      <div className="relative flex flex-col lg:flex-row self-center justify-between rounded-lg shadow-lg border border-[#2A0E61] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] overflow-hidden">
        <div className="relative p-4 sm:p-6 md:p-8 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-5">Let me introduce myself</h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-5">
            I'm a Software Developer with over 7 years of experience, passionate about creating exceptional user experiences and mastering the entire development process—from initial design to final testing. My focus is on building intuitive, high-performance web applications that blend strong UI/UX principles with technical precision.
          </p>
          
          <div className="mt-4 sm:mt-6 md:mt-10">
            <ul className='text-white flex gap-3 sm:gap-5' >
              <li>
                <a target="_blank" href='https://github.com/rafacore' className="hover:opacity-80 transition-opacity">
                  <RxGithubLogo className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/rafaelandradedonascimento/" className="hover:opacity-80 transition-opacity">
                  <RxLinkedinLogo className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Uncomment and adjust this for profile image if needed
        <div className="hidden lg:block relative w-full lg:w-1/3">
          <Image
            src="/NextWebsite.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        */}
      </div>
    </div>
  )
}

export default About