import React from 'react';
import SectionH from '../SectionH';
import AImages from './AImages';
import Arrive1 from '../../../../public/Images/arrival.svg';
import Arrive2 from '../../../../public/Images/arrival2.svg';
import Arrive3 from '../../../../public/Images/arrival3.svg';
import {HiArrowNarrowRight} from 'react-icons/hi';




export default function Arrivals() {
  return (
    <div className='arrival-container-outer'>
        <SectionH sectionHead={'New arrivals'} sectionNumber={'02'}/>

        <div className="a-bttm w-[90%] mx-auto mt-12">
            <div className="a-bttm-inner flex-center justify-between gap-y-10 flex-wrap gap-x-0">
              <AImages image={Arrive1} itemName={'Wool x Buffer Jacket'} price={'110'} maxW={'sm:w-[49%] w-full'}/>
              <AImages image={Arrive2} itemName={'Buffer Jacket'} price={'90'} maxW={'sm:w-[49%] w-full'}/>
              <AImages image={Arrive3} itemName={'Cargo Hoodie Jacket'} price={'110'} maxW={'sm:w-[49%] w-full'}/>

              <div className='w-full sm:w-[49%] lg:pl-5 relative lg:place-self-center sm:place-self-start '>
                <div className='w-full h-full relative sm:pt-10 lg:pt-0'>

                  <div className="sm:text-left text-center text-lg space-y-5 lg:space-y-10 font-medium sm:w-5/6 w-full">
                    <p className='leading-loose tracking-wide'>
                      Introducing our top-of-the-line winter jacket, the ultimate solution for cold weather! Made with high-quality materials.
                    </p>

                    <button className='bg-[#000] text-white py-4 px-9 text-xl font-semibold '>
                      Shop now
                    </button>
                  </div>


                  <button className='border arrival-animate animate-discover'>
                    <p className='text-base font-medium relative top-2'>Discover More</p>
                    <HiArrowNarrowRight size={25} className='rotate-90 '/>
                  </button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
