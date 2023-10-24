"use client"

import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/Icons/logo.svg';
import { useState } from 'react';

export default function Nav() {
   const [active, setActive] = useState(false);


  return (
    <nav className='w-full lg:px-10 border-b border-l-black relative cursor-pointer'>

      <ul className='lg:w-full w-[90%] relative mx-auto uppercase text-xl flex-center justify-between font-semibold h-16 overflow-hidden ease-in duration-700 delay-200'>

        <li className={`nav-links lg:flex hidden`}>Home</li>
        <li className='nav-links lg:hidden' onClick={()=>setActive(!active)}>Menu</li>
        <li className='nav-side-b'>Shop</li>
        <li className='nav-links lg:flex hidden' href='#lb'>Lookbook</li>
        <li className=' nav-side-b lg:border-opacity-100 border-opacity-0'><Image src={logo} alt='og-clothier logo' height={100} width={100} className='w-12'/></li>
        <li className='nav-links lg:flex hidden'>About</li>
        <li className='nav-side-b'>Search</li>
        <li className='nav-links'>Cart</li>
      </ul>
      <div className={`mobile-nav w-2/6 bg-white bg-opacity-50 absolute ${active? 'left-0':'-left-full'} top-[30vh] translate-y-[-50%] border-r border-b border-l-black z-[999] transition-all ease-in duration-500`}>
        <ul className=''>
          <li className='nav-links h-16 border-y border-l-black'>Home</li>
          <li className='nav-links h-16' href='#lb'>Lookbook</li>
        </ul>

      </div>
      
    </nav>
  )
}
