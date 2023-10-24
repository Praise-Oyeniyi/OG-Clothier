import React from 'react'
import Image from 'next/image'

export default function AImages({image, itemName, price, maxW}) {
  return (
    <div className={`${maxW} group `}>

        <div className=' border-l-black border flex-center bg-image-bg overflow-hidden'>
            <Image src={image} alt='item view' height={100} width={100} className='h-full w-full group-hover:scale-110 transition-all ease-linear ' />
        </div>

        <div className="item-info-outer border-l-black border mt-3 group-hover:bg-l-black group-hover:text-white transition-all ease-linear ">
            <div className="item-info flex-center justify-between sm:text-lg font-medium text-base">
                <h3 className='pl-4'>{itemName}</h3>
                <h4 className='w-1/6 border-l-black border-l group-hover:border-l-white flex-center p-4 tracking-wide'>${price}</h4>
            </div>
        </div>
    </div>
  )
}
