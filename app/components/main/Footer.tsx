import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
        

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Rafael Nascimento Dev 2024 Inc. All rights reserved<RxGithubLogo />
            </div>
        </div>
    </div>
  )
}

export default Footer