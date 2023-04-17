'use client';
import { useState } from 'react';
import ToolBar from '../components/ToolBar';
import Explorer from './components/Explorer';
import ToolMenu from './components/ToolMenu';

export default function Finder({ isVisible, toolBarHandler }: { isVisible: boolean; toolBarHandler(): void; }) {

  const [fullWindow, setFullWindow] = useState(false);
  const [focus, setFocus] = useState(true);

  const toggleFullWindow = () => setFullWindow(fullWindow => !fullWindow);
  const changeFocusState = () => setFocus(focus => !focus);

  const position = "";

  return (
    // <div className='relative flex flex-grow justify-center'>
    <div
      onClick={changeFocusState}
      className={` transition-all ${isVisible ? '' : 'hidden'} absolute flex flex-col ${fullWindow ? 'w-full h-full z-20' : 'w-5/6 h-5/6 max-w-[1920px] max-h-[1080px] my-auto rounded-lg overflow-hidden'} ${position}`}
    >
      <ToolBar
        toolBarHandler={toolBarHandler}
        toggleFullWindow={toggleFullWindow}
      >
        finder {`fullwindow:${fullWindow}`}
        <ToolMenu />
      </ToolBar>
      <Explorer />
    </div>
    // </div>
  )
}