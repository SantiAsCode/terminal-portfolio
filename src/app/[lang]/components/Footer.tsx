'use client';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from '@helpers/helpers';

const links = ['terminal', 'finder', 'mail', 'textedit', 'safari'];

export default function Footer({ windowsHandles }: { windowsHandles: { [key: string]: () => void; } }) {

  const pathName = usePathname();

  return (
    <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
      <div className='flex justify-center w-full h-full'>
        <span className='flex items-center w-fit p-3 rounded-t-2xl backdrop-blur-sm bg-gray-400/30'>
          {
            links.map((app, index) =>
              <div key={index}>
                <button
                  onClick={windowsHandles[app]}
                >
                  {/* <Link href={`/${global.locale}/${pathName?.includes(app) ? '' : app}`} > */}
                    <Image
                      className='transition-all ease-in-out delay-150 hover:scale-150'
                      width={80}
                      height={80}
                      alt={`${capitalizeFirstLetter(app)}`}
                      src={`/images/${app}.png`}
                      />
                  {/* </Link> */}
                  </button>
                <span className={`transition-all block w-2 h-2 mx-auto mt-2 rounded-full ${pathName?.includes(app) ? 'bg-cgray' : ''}`}></span>
              </div>
            )
          }
        </span>

      </div>
    </footer>
  )
}