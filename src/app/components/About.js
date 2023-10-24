import React from 'react';
import SectionH from './SectionH';
import Image from 'next/image';
import AboutBanner from '../../../public/Images/About.svg'

export default function About() {
  return (
    <div className='about-container-outer w-full'>
        <SectionH sectionHead={'about OG'} sectionNumber={'06'}/>

        <div className="about-inner-bttm w-[90%] mx-auto mt-12">
            <Image src={AboutBanner} alt='item view' height={100} width={100} className='w-full h-full' />

            <div className='sm:flex-center lg:items-start items-center justify-between mt-14'>
                <p className='md:text-2xl text-xl tracking-wide leading-normal font-medium lg:w-3/6 md:w-4/6 w-full text-center sm:text-left'>
                    At our clothing store, we understand the importance of quality and style. 
                    So, shop with confidence knowing that you`re getting top-quality clothing that looks and feels great.
                </p>
                <button className='border pointer-events-auto !flex-center sm:block mx-auto sm:mr-0 border-l-black text-l-black sm:py-5 sm:px-10 py-4 px-7 mt-10 sm:mt-0 sm:text-xl text-lg font-bold w-fit relative after:absolute after:h-full after:w-full after:bg-l-black after:top-0 after:opacity-0 after:-z-10 after:pointer-events-none  group after:hover:left-0 after:hover:opacity-100 after:-left-full after:transition-all overflow-hidden after:ease after:duration-300'>
                    <p className='!z-50 pointer-events-auto group-hover:text-white'>Visit Store </p>
                </button>
            </div>

        </div>
    </div>
  )
}
