// Navbar.js

import React, { memo } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = memo(() => {
  return (
    <div className='w-screen h-16 backdrop-blur-sm	 text-xl flex items-center justify-between px-4 relative z-10'>
      <div className='flex items-center'>
        <button className='text-[#9290C3] text-3xl p-4'><FaBars /></button>
        <p className='text-4xl text-[#9290C3] inline p-3'>WeebClub</p>
      </div>
      <div className='relative flex-grow ml-4'>
        <input
          type='text'
          className=' h-10 text-xl border-0 rounded-sm pl-2 text-black '
          placeholder='Search'
        />
      </div>
      <div className='flex'>
      <p className='text-[#1B1A55]   text-2xl pt-1 inline-block px-4'>Comedy</p>
      <p className='text-[#1B1A55] text-xl pt-1 inline-block px-4'>Adventure</p>
        <p className='text-[#1B1A55] text-xl pt-1 inline-block px-4'>Action</p>
        <button className='text-white text-xl border-px rounded  mx-2 w-20 h-10 bg-[#9290C3]'>Login</button>
      </div>
    </div>
  );
});

export default Navbar;
