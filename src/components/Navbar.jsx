import React, { useState } from 'react';
import logo from '/animeLogo.svg';

export default function Navbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const handleMenuClick = () => setIsHamburgerActive(!isHamburgerActive);
  return (
    <>
      <div className='absolute top-0 z-20 hidden px-6 navbar bg-transparent/5'>
        <div className='absolute top-0'>
          <img className='w-24' src={logo} alt='' />
        </div>
        <div className='flex-1 hidden md:flex'></div>
        <div className='flex-1 gap-6 text-sm'>
          <button>Home</button>
          <button>Catalog</button>
          <button>News</button>
        </div>
        <div className='flex-1 hidden '>
          <label className='flex items-center gap-2 bg-transparent input input-bordered'>
            <input type='text' className='w-20' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>
        <div className='flex gap-4'>
          <button className='btn btn-xs sm:btn-sm md:btn-md'>Log In</button>
          <button className='text-black bg-white btn btn-xs sm:btn-sm md:btn-md'>Get Started</button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <nav className='absolute z-30 flex w-full px-4 min-h-16'>
        <div className='absolute top-0'>
          <img className='w-16' src={logo} alt='' />
        </div>
        <div
          className={`bg-yellow-200 px-4 gap-6 h-[100svh] w-full max-w-[250px] fixed top-0 z-30 flex flex-col items-center justify-center text-center text-xl transition-all  duration-500 ${
            isHamburgerActive ? 'right-0' : '-right-[450px]'
          }`}
        >
          <button>Home</button>
          <button>Catalog</button>
          <button>News</button>

          <label className='flex items-center w-full gap-2 bg-transparent input input-bordered'>
            <input type='text' className='w-20' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
          <div className='flex gap-4'>
            <button className='btn '>Log In</button>
            <button className='text-black bg-white btn '>Get Started</button>
          </div>
        </div>
        <div className='relative z-40 w-12 ml-auto' onClick={handleMenuClick}>
          <span
            className={`absolute w-full h-1 bg-blue-400 top-4 transition-all duration-300 ${
              isHamburgerActive && 'rotate-45 top-8'
            }`}
          ></span>
          <span
            className={`absolute w-full h-1 bg-blue-400 top-6 transition-all duration-300 ${
              isHamburgerActive ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`absolute w-full h-1 bg-blue-400 top-8 transition-all duration-300 ${
              isHamburgerActive && '-rotate-45 top-6'
            }`}
          ></span>
        </div>
      </nav>
    </>
  );
}
