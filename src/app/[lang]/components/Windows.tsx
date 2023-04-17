'use client'
import { useEffect, useRef, useState } from "react";
import Finder from "../(finder)/Finder";
import Mail from "../(mail)/Mail";
import Safari from "../(safari)/Safari";
import Terminal from "../(terminal)/Terminal"
import Textedit from "../(textedit)/Textedit";
import Footer from "./Footer";

export default function Windows({ lang }: { lang: string }) {

  global.locale = lang;

  const [windowsStates, setWindowsStates] = useState({
    terminal: false,
    finder: false,
    mail: false,
    textedit: false,
    safari: false
  });

  const updateObject = (key: string) => {
    let object = { ...windowsStates };
    object[key as keyof typeof object] = !object[key as keyof typeof object];
    return object;
  }

  const windowsHandles = {
    terminal: () => setWindowsStates(updateObject('terminal')),
    finder: () => setWindowsStates(updateObject('finder')),
    mail: () => setWindowsStates(updateObject('mail')),
    textedit: () => setWindowsStates(updateObject('textedit')),
    safari: () => setWindowsStates(updateObject('safari'))
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <main id="windows" className="grow w-full">
        <Terminal isVisible={windowsStates.terminal} toolBarHandler={windowsHandles.terminal} />
        <Finder isVisible={windowsStates.finder} toolBarHandler={windowsHandles.finder} />
        <Mail isVisible={windowsStates.mail} toolBarHandler={windowsHandles.mail} />
        <Textedit isVisible={windowsStates.textedit} toolBarHandler={windowsHandles.textedit} />
        <Safari isVisible={windowsStates.safari} toolBarHandler={windowsHandles.safari} />
      </main>
      <Footer windowsHandles={windowsHandles} />
    </div>

  )
}
