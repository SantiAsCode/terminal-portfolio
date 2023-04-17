import Clock from '@components/Clock';
import Locale from '@components/Locale';

export default function Header() {

  return (
    <header className='flex justify-between z-50 backdrop-blur-sm bg-gray-400/30'>
      <div>
        Login/Logout
      </div>
      <div className='flex'>
        <Locale locale={global.locale!} />
        <Clock locale={global.locale!} />
      </div>
    </header>
  )
}