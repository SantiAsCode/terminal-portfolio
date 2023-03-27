'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['es', 'en', 'pt'];

export default function Locale({ lang }: { lang: string }) {
    const pathname = usePathname();
    const [isShown, setIsShown] = useState(false);
    return (
        <div
            className='flex flex-col px-2 relative cursor-pointer'
            onClick={() => setIsShown(!isShown)}
        >
            <span>{ lang.toUpperCase() }</span>
            <div className={`flex flex-col py-1 px-2 left-0 absolute backdrop-blur-sm text-black bg-white rounded-md ${ isShown ? 'top-full' : 'bottom-full' }`}>
                {
                    locales.map(locale => {
                        if (lang != locale)
                            return <Link href={ pathname?.replace(lang, locale) ?? "/"+lang }>
                                { locale.toUpperCase() }
                            </Link>
                    })
                }
            </div>
        </div>
    )
}
