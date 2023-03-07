import './globals.css'
import Apps from "./Apps";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen bg-[url('/images/bg.webp')] bg-cover bg-center">
        <div className='relative flex flex-col h-full bg-cyellow/50 backdrop-blur-[2px]'>
          {children}
          <div className='w-full'>
            <Apps />
          </div>
        </div>
      </body>
    </html>
  )
}
