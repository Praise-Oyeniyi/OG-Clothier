import React from 'react';
import SectionH from '../SectionH';
import AImages from '../Arrival/AImages';
import BS1 from '../../../../public/Images/bs1.svg';
import BS2 from '../../../../public/Images/bs2.svg';
import BS3 from '../../../../public/Images/bs3.svg';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';



export default function BSellers() {
  return (
    <div className='bs-container-outer w-full pt-12 lg:pt-0'>
        <SectionH sectionHead={'Best Sellers'} sectionNumber={'04'}/>

        <div className='slider-outer w-full mt-12 space-y-10'>
            <div className="  w-full">
                <div className='w-full overflow-x-auto flex-center justify-start gap-x-5 slider-inner'>
                    <AImages image={BS1} itemName={'Cargo Hoodie Jacket'} price={'110'} maxW={' lg:min-w-[30%] min-w-[50%] ml-[100%] lg:ml-0'}/>
                    <AImages image={BS2} itemName={'Cargo Hoodie Jacket'} price={'110'} maxW={'lg:min-w-[30%] min-w-[50%]'}/>
                    <AImages image={BS1} itemName={'Cargo Hoodie Jacket'} price={'110'} maxW={'lg:min-w-[30%] min-w-[50%]'}/>
                    {/* <AImages image={BS3} itemName={'Cargo Hoodie Jacket'} price={'110'} maxW={'lg:min-w-[30%] min-w-[50%] max-w-[inherit]'}/> */}
                    <AImages image={BS2} itemName={'Cargo Hoodie Jacket'} price={'110'} maxW={'lg:min-w-[30%] min-w-[50%]'}/>
                </div>


                <div className='w-[95%] mt-7 mx-auto'>
                    <div className='flex-center justify-between'>
                        <div className='max-h-16 flex-center justify-start space-x-3'>    
                            <BsFillArrowLeftCircleFill size={40}/>
                            <BsFillArrowRightCircleFill size={40}/>
                        </div>
                        <h3 className='text-l-black font-semibold text-xl tracking-wide'>3/10</h3>
                    </div>
                </div>
            </div>

            <div className='mx-auto flex-center'>
                <button className='bg-[#000] text-white py-4 px-9 text-xl font-medium w-fit '>
                    Shop now
                </button>
            </div>
        </div>

    </div>
  )
}
