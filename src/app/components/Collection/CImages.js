import React from 'react';
import Image from 'next/image';
import Right from '../../../../public/Icons/rightw.svg'

export default function CImages({pClass}) {
  return (
    <div className={`${pClass} border border-l-black pointer-events-auto relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-c-image-after after:pointer-events-none after:z-0 hover:bg-top`}>
        <div className='p-5 py-6 min-w-full flex-column h-full items-start justify-between text-white font-medium'>
            <h3 className='uppercase text-xl z-10'>sw-20</h3>

            <div className='flex-center justify-between z-10'>
                <h3 className='text-lg'>OG X Summer</h3>
                <button className='uppercase text-sm font-semibold flex-center w-auto'>
                        Explore
                        <Image src={Right} height={100} width={18} alt='right-icon' className='ml-3 '/>
                </button>
            </div>
        </div>
    </div>
  )
}
