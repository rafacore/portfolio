import { string } from 'prop-types'
import React from 'react'

interface Props {
title: string;
subTitle?:string;
}
const TitleSection = ({title, subTitle}: Props) => {
  return (

    <div className='w-full h-auto flex flex-col items-center justify-center'>
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
   {title}
  </h1>
  <p className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'> {subTitle}</p>
   
        </div>

  )
}

export default TitleSection