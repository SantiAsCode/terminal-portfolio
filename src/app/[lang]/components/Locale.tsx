'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['es', 'en', 'pt'];

export default function Locale({ locale }: { locale: string }) {

	const pathname = usePathname();
	const [isShown, setIsShown] = useState(false);

	return (
		<>
			<div
				className='flex flex-col px-2 relative cursor-pointer'
				onClick={() => setIsShown(!isShown)}
			>
				<span>{locale.toUpperCase()}</span>
				<div className={`flex flex-col py-1 px-2 left-0 absolute backdrop-blur-sm text-black bg-white rounded-md ${isShown ? 'top-full' : 'bottom-full'}`}>
					{
						locales.map(lang => {
							if (locale != lang) {
								return (
									<Link
										id={`${lang}_link`}
										href={pathname?.replace(locale, lang) ?? "/" + lang}
									>
										{lang.toUpperCase()}
									</Link>
								)
							}
						})
					}
				</div>
			</div>
		</>
	)
}
