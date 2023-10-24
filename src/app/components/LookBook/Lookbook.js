import React from 'react';
import SectionH from '../SectionH';
import Image from 'next/image';
import { LookbookD } from './LookBookDet';
import {HiArrowNarrowRight} from 'react-icons/hi';




export default function Lookbook() {
  return (
    <div className='lb-container-outer w-full' id='lb'>
        <SectionH sectionHead={'Lookbook'} sectionNumber={'05'}/>

        <div className="lb-inner-bttm">
            {LookbookD.map((item, index)=>(

                <div className="lb-inner py-7 border-b border-l-black group " key={index}>
                    <div className='w-[90%] flex-center justify-between mx-auto relative'>
                        <h3 className='sm:text-2xl sm:font-semibold font-medium text-2xl tracking-wide relative'>{item.name}</h3>
                        <Image src={item.image} alt='item-preview' height={100} width={100} className='absolute scale-[1.1] cursor-pointer border border-l-black object-cover object-top -top-3 right-32 min-w-[30%] max-h-52 opacity-0 group-hover:opacity-100 delay-150 transition-all duration-500 ease-in-out'/>
                        <HiArrowNarrowRight size={25} className='ml-3 group-hover:rotate-[130deg] transition-all duration-300 ease-in cursor-pointer'/>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}