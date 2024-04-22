'use client'
import { useState} from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex justify-between items-center py-7 mx-auto max-w-7xl text-custom-green font-font-sg font-bold'>
        <div>
        <Link href="/">
              <img className='w-[85%]' src="./logo.png"/></Link>
        </div>


  <nav className='hidden md:block lg:flex gap-20'>
      <div >
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
      </div>

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
  </nav>



      <div className='md:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className='md:hidden absolute top-16 right-0 bg-white text-custom-green shadow-md rounded-md'>
          
        <div >
        <ul className='flex flex-col gap-y-2 text-sm'>
          <li>
            <Link href="/" className='block px-4 py-2'>
              Начало
            </Link>
          </li>
          <li>
            <Link href="/about" className='block px-4 py-2'>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className='block px-4 py-2'>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/prices" className='block px-4 py-2'>
              Цени
            </Link>
          </li>
          <li>
            <Link href="/work" className='block px-4 py-2'>
              Как работи
            </Link>
          </li>
          <li>
            <Link href="/contact" className='block px-4 py-2'>
              Контакти
            </Link>
          </li>
        </ul>
        </div>

      <div>
        <ul className='flex flex-col gap-y-2 text-sm'>
        <li>
            <Link href="/profile" className='block px-4 py-2'>
              Профил
            </Link>
          </li>
          <li>
            <Link href="/request" className="border-2 border-custom-green rounded-md block px-4 py-2 mx-2 mb-2">
              Заявка за пратка
            </Link>
          </li>
        </ul>
      </div>
          
        </nav>
      )}


    </header>
  );
};

export default Header;