import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

export default function SectionH({sectionNumber, sectionHead}) {
  return (
    <>
        <div className="a-inner-top w-full border-b border-l-black pb-5">
            <div className="a-inner w-[90%] mx-auto space-y-2 ">

                <h4 className='font-bold text-base sm:text-lg'>{sectionNumber}</h4>

                <div className='flex-center justify-between tracking-wide'>
                    <h3 className='capitalize sm:text-6xl sm:font-medium text-3xl font-semibold'>{sectionHead}</h3>

                    <button className='uppercase sm:text-2xl text-xl font-semibold flex-center w-auto'>
                        see all 
                        <HiArrowNarrowRight size={30} className='ml-3 '/>
                        
                    </button>

                </div>
            </div>
        </div>
    </>
  )
}
