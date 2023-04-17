import Link from 'next/link';

export default function NavBar({ toolBarHandler, toggleFullWindow, children }: { toolBarHandler(): void; toggleFullWindow(): void; children: React.ReactNode; }) {

  return (
    <header className="relative flex flex-col items-center bg-cwhite border border-b-cgray text-black">
      <div className="absolute flex w-full h-6 bg-transparent">
        <button
          key="redBtn"
          className="relative w-4 h-4 my-auto ml-2 rounded-full bg-red-400 group"
          onClick={toolBarHandler}
        >
          <span className='block absolute w-3 h-0.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-300'></span>
          <span className='block absolute w-3 h-0.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-red-300'></span>
          <span className='absolute w-full h-full top-0 left-0 rounded-full transition ease-in-out delay-150 bg-red-400 group-hover:bg-transparent'></span>
        </button>
        <Link
          key="orangeBtn"
          className="relative w-4 h-4 my-auto ml-2 rounded-full bg-orange-400"
          href="/"
        >
          <span className="block absolute w-3 h-0.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-300"></span>
          <span className='absolute w-full h-full rounded-full transition ease-in-out delay-150 bg-orange-400 hover:bg-transparent'></span>
        </Link>
        <button
          key="greenBtn"
          className="relative flex w-4 h-4 my-auto ml-2 rounded-full bg-green-400"
          onClick={toggleFullWindow}
        >
          <span className="w-2 h-2 m-auto bg-green-300"><span className="block relative w-3 h-0.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-green-400"></span></span>
          <span className='absolute w-full h-full rounded-full transition ease-in-out delay-150 bg-green-400 hover:bg-transparent'></span>
        </button>
      </div>
      {children}
    </header>
  )
}