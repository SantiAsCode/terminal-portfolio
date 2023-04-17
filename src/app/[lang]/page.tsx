import { Inter } from '@next/font/google';
import Terminal from './(terminal)/Terminal';
import Footer from './components/Footer';
import Header from './components/Header';
import Windows from './components/Windows';
const inter = Inter({ subsets: ['latin'] })

export default function Login({ params }: { params: { lang: string } }) {

  global.locale = params.lang;

  return (
    <>
      <Header />
      <Windows lang={params.lang} />
    </>
  );
}
