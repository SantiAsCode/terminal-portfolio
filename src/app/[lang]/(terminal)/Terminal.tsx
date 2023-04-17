'use client';
import { useEffect, useState } from 'react';
import ToolBar from '@/app/[lang]/components/ToolBar';
import Cli from './Cli';

export default function Terminal({ isVisible, toolBarHandler }: { isVisible: boolean; toolBarHandler(): void; }) {

  const [fullWindow, setFullWindow] = useState<boolean>(false);
  const toggleFullWindow = () => setFullWindow(fullWindow => !fullWindow);

  return (
    <div
      className={` transition-all ${isVisible ? '' : 'hidden'} absolute flex flex-col ${fullWindow ? 'w-full h-full z-20' : 'w-5/6 h-5/6 max-w-[1920px] max-h-[1080px] my-auto rounded-lg overflow-hidden'}`}
      // onClick={changeFocusState}
    >
      <ToolBar
        toggleFullWindow={toggleFullWindow}
        toolBarHandler={toolBarHandler}
      >
        terminal {`fullwindow:${fullWindow}`}
      </ToolBar>
      <Cli />
    </div>
  )
}
