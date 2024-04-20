import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-evenly items-center py-7 mx-auto max-w-6xl text-custom-green font-font-sg font-bold'>
        <div className='font-bold text-lg mx-5'>
        <Link href="/">
              Website</Link>
        </div>

      <nav>
        <ul className='flex justify-between gap-x-5 text-xs whitespace-nowrap mx-5'>
          <li>
            <Link href="/" className='hover:text-black-900'>
              Начало
            </Link>
          </li>
          <li>
            <Link href="/about" className='hover:text-black-900'>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:text-black-900'>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/prices" className='hover:text-black-900'>
              Цени
            </Link>
          </li>
          <li>
            <Link href="/work" className='hover:text-black-900'>
              Как работи
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:text-black-900'>
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <ul className='flex justify-between gap-x-6 text-xs'>
        <li>
            <Link href="/profile" className='hover:text-black-900'>
              Профил
            </Link>
          </li>
          <li>
            <Link href="/request" className='hover:text-black-900'>
              Заявка за пратка
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;