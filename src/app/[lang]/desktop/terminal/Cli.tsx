'use client';

import React, { useState, useRef } from 'react';
import Command from './Command';
import Prompt from './Prompt';
import CliMessages from "@lib/json/guest-messages.json";

export default function Cli() {

  const inputRef = useRef(null);

  const bringFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const [ commandList, setCommandList ] = useState(CliMessages.guest);

  const addCommandToList = (newCommand: string) => {
    if (newCommand == 'clear') {
      setCommandList([])
    } else {
      setCommandList([...commandList, 'guest@santiascode-Portfolio ~ % '+newCommand]);
    }
  };

  return (
    <div
      className="flex flex-col flex-grow p-4 bg-cgray rounded-b-lg"
      onClick={bringFocus}
    >
      {
        commandList.map((string, index) =>
          <Command key={index}>{string}</Command>
        )
      }
      <Prompt
        addCommandToList={addCommandToList}
        inputRef={inputRef}
      />
    </div>

  )
}
