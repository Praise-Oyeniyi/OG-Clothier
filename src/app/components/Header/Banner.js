"use client"

import { useState } from 'react';
import downBtn from '../../../../public/Icons/hero-button.svg'
import Image from 'next/image';

export default function Banner() {
  const [bg, changeBG] = useState(false)

  return (
    <div className='w-full banner-container-outer'>
        <div className={`w-[90%] border-r border-b border-l-black h-[70vh] sm:h-screen mx-auto transition-all ease-in duration-300 ${bg? 'banner-bg2':'banner-bg1'}`}>

            <div className="banner-outer h-full flex-column relative">

                <div className='leading-snug pt-10'>
                    <h2 className='banner-header'>Og Clothier</h2>
                    <button className={`reel transition-all ease-linear duration-300 ${bg?'top-16 motion-safe:animate-bounce  hover:bg-white hover:text-l-black bg-l-black text-white':'top-0'}`} onClick={()=>changeBG(!bg)}>{bg?'Stop':'Play'}<br/> Reel</button>
                </div>


                <div className='relative self-end md:!-bottom-[22%] -bottom-10  w-14 mr-7 animate-bounce'><Image src={downBtn} height={100} width={100} alt='scroll-to-bottom'/></div>
            </div>

        </div>
    </div>
  )
}
