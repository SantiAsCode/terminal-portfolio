import React from 'react'
import Image from 'next/image';
import Options from "../../../../../public/images/Options";
import Angle from "../../../../../public/images/Angle";
import Magnifyglass from "../../../../../public/images/Magnifyglass";

export default function ToolMenu() {
  return (
    <div className='flex justify-between w-full'>
      <div className='flex m-2'>
        <span className='flex justify-center items-center w-8 h-8 p-1 rounded-md border-2 border-cgray/30 bg-white rotate-180'>
          <Angle
            className="fill-cgray/30 stroke-transparent"
          />
        </span>
        <span className='flex justify-center items-center w-8 h-8 p-1 rounded-md border-2 border-cgray/30 bg-white'>
          <Angle
            className="fill-cgray/30 stroke-transparent"
          />
        </span>
      </div>
      <div className='flex m-2'>
        <span className='w-8 h-8 rounded-l-md border-2 border-cgray/30 bg-white'>

        </span>
        <span className='flex flex-col justify-around w-8 h-8 p-1 rounded-r-md border-2 border-cgray/30 bg-white'>
          <span className='block w-full h-1 bg-cgray/30 rounded-lg'></span>
          <span className='block w-full h-1 bg-cgray/30 rounded-lg'></span>
          <span className='block w-full h-1 bg-cgray/30 rounded-lg'></span>
          <span className='block w-full h-1 bg-cgray/30 rounded-lg'></span>
        </span>
        <span className='flex justify-center items-center w-8 h-8 mx-4 p-1 rounded-md border-2 border-cgray/30 bg-white'>
          <Options
            className="fill-cgray/30 stroke-transparent"
          />
        </span>
      </div>
      <div className='flex relative w-1/4 max-w-xs'>
        <Magnifyglass
          className='absolute w-5 h-5 ml-4 fill-cgray/30 top-1/2 transform -translate-y-1/2'
        />
        <input className='w-full m-2 pl-7 rounded-full border-cgray/30 bg-white' type="text" name="search-bar" id="search-bar" />
      </div>
    </div>
  )
}