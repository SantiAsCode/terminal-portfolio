'use client';

import React, { useState } from 'react';
import NavBar from '../NavBar';
import Cli from './Cli';

export default function Terminal() {

  const [ fullWindow, setFullWindow ] = useState(false);
  const [ focus, setFocus ] = useState(true);

  const toggleFullWindow = () => {
    setFullWindow(fullWindow => !fullWindow);
  };

  const changeFocusState = () => {
    setFocus(focus => !focus);
  };

  return (
    <div className='relative flex flex-grow justify-center'>
      <div
        onClick={changeFocusState}
        className={`transition-all flex flex-col z-10 ${ !fullWindow ? 'w-11/12 h-5/6 max-w-[1920px] max-h-[1080px] my-auto' : 'absolute w-full h-screen' }`}
      >
        <NavBar
          toggleFullWindow={toggleFullWindow}
        >
          sasdsadasd {`${fullWindow}`}
        </NavBar>
        <Cli />
      </div>
    </div>
      
  )
}
