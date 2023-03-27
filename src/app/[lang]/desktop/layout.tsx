import Footer from './Footer';

export default async function DesktopLayout({ params, children }: { params: { lang: string }, children: React.ReactNode }) {
    
    return (
        <>
            { children }
            <Footer lang={ params.lang } />
        </>
    )
}
