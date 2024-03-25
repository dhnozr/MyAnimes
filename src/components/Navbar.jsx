import React from 'react';
import logo from '/animeLogo.svg';

export default function Navbar() {
  return (
    <div className='fixed top-0 navbar bg-transparent/5'>
      <div className='absolute top-0'>
        <img className='w-24' src={logo} alt='' />
      </div>
      <div className='flex-1'></div>
      <div className='flex-1 gap-6 '>
        <button>Home</button>
        <button>Catalog</button>
        <button>News</button>
      </div>
      <div className='flex-1'>
        <label className='flex items-center gap-2 bg-transparent input input-bordered'>
          <input type='text' className='grow' placeholder='Search' />
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
  );
}
