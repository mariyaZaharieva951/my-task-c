import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center py-7 mx-auto max-w-7xl text-custom-green font-font-sg font-bold'>
        <div>
        <Link href="/">
              <img className='w-[85%]' src="./logo.png"/></Link>
        </div>

      <nav>
        <ul className='flex justify-between gap-x-4 text-sm whitespace-nowrap mx-5'>
          <li>
            <Link href="/" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Начало
            </Link>
          </li>
          <li>
            <Link href="/about" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/prices" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Цени
            </Link>
          </li>
          <li>
            <Link href="/work" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Как работи
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <ul className='flex justify-between gap-x-4 text-sm'>
        <li>
            <Link href="/profile" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
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