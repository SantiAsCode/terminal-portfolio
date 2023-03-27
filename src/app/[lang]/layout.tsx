import './globals.css'
import AuthContext from './AuthContext';
import Header from './Header';

export default async function RootLayout({ params, children }: { params: { lang: string }, children: React.ReactNode }) {
    
    return (
        <html lang={ params.lang } >
            <AuthContext>
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <body className="h-screen bg-[url('/images/bg.webp')] bg-cover bg-center">
                <div className='relative flex flex-col h-full bg-cgreen/30'>
                    <Header lang={ params.lang } />
                    { children }
                </div>
            </body>
            </AuthContext>
        </html>
    )
}
