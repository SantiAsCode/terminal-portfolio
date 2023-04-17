import { Inter } from '@next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Login({ params }: { params: { land: string }}) {
    return (
        <main className="w-full h-full flex">
            <div className='m-auto flex flex-col justify-center items-center'>
                <Image
                    src="/images/me.jpg"
                    alt="santiago Alé"
                    width="150"
                    height="150"
                    className='rounded-full'
                />
                <h1 className='mt-4 text-4xl'>Santiago Alé</h1>
                <h2 className='mb-4 text-2xl'>Backend - Developer</h2>
                <div className='flex flex-col min-[400px]:flex-row justify-center'>
                    <button className='py-1 px-2 text-xl backdrop-blur-sm bg-gray-400/30 rounded-md mx-4' key="guest">Guest Sign</button>
                    <button className='py-1 px-2 text-xl backdrop-blur-sm bg-gray-400/30 rounded-md mx-4 my-2 min-[400px]:my-0' key="github">Github Sign</button>
                    <button className='py-1 px-2 text-xl backdrop-blur-sm bg-gray-400/30 rounded-md mx-4' key="google">Google Sign</button>
                </div>
            </div>
        </main>
    )
}
