import React from 'react';
import downBtn from '../../../../public/Icons/hero-button.svg'
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='w-full banner-container-outer'>
        <div className="w-[90%] border-y border-l-black banner-bg h-[70vh] sm:h-screen mx-auto">

            <div className="banner-outer h-full flex-column relative">

                <div className='leading-snug pt-10'>
                    <h2 className='banner-header'>Og Clothier</h2>
                    <button className='reel'>Play<br/> Reel</button>
                </div>


                <div className='relative self-end md:!-bottom-[22%] -bottom-10  w-14 mr-7 animate-bounce'><Image src={downBtn} height={100} width={100} alt='scroll-to-bottom'/></div>
            </div>

        </div>
    </div>
  )
}
