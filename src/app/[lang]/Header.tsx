import Clock from '@/components/Clock';
import Locale from '@/components/Locale';

export default function Header({ lang }: { lang: string }) {

    return (
        <header className='flex justify-between backdrop-blur-sm bg-gray-400/30'>
            <div>
                Login/Logout
            </div>
            <div className='flex'>
                <Locale lang={ lang }/>
                <Clock/>
            </div>
        </header>
    )
}