import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-evenly items-center py-7 mx-auto max-w-6xl text-custom-green font-font-sg font-bold'>
        <div className='font-bold text-lg mx-5 hover:underline'>
        <Link href="/">
              Website</Link>
        </div>

      <nav>
        <ul className='flex justify-between gap-x-5 text-xs whitespace-nowrap mx-5'>
          <li>
            <Link href="/" className='hover:underline'>
              Начало
            </Link>
          </li>
          <li>
            <Link href="/about" className='hover:underline'>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:underline'>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/prices" className='hover:underline'>
              Цени
            </Link>
          </li>
          <li>
            <Link href="/work" className='hover:underline'>
              Как работи
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:underline'>
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <ul className='flex justify-between gap-x-6 text-xs'>
        <li>
            <Link href="/profile" className='hover:underline'>
              Профил
            </Link>
          </li>
          <li>
            <Link href="/request" className="border-2 border-custom-green rounded-md py-2 px-4 bg-transparent text-custom-green hover:bg-custom-green hover:text-white transition duration-300 ease-in-out">
              Заявка за пратка
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;