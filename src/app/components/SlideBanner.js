import React from 'react'

export default function SlideBanner() {
  return (
    <div className='w-full py-14'>
        <div className='bg-l-black h-96 w-full overflow-hidden flex-column justify-between'>
            <div className='flex-center justify-between items-start'>
                <h1 className='clothier-s-text animate-wiggle'>OG CLOTHIER</h1>

                <div className='bg-[#000AFF] pt-10 mr-16 -mt-24 clothier-slide '>
                    <div className='relative w-full flex justify-center items-center'>
                        <h3 className=' animate-top'>Style</h3>
                        <h3 className=' animate-middle'>Quality</h3>
                        <h3 className=' animate-bottom'>Fashion</h3>
                    </div>
                    
                </div>
            </div>


            <div className='flex-center justify-between items-center'>
                <div className='bg-[#FA5B17] pb-10 ml-10 mt-16 clothier-slide z-10'>
                    <div className='relative w-full flex justify-center items-center'>
                        <h3 className=' animate-top'>Quality</h3>
                        <h3 className=' animate-middle'>Style</h3>
                        <h3 className=' animate-bottom'>99.9</h3>
                        
                    </div>
                </div>
                <h1 className='clothier-s-text pb-14 relative animate-wiggletwo'>OG CLOTHIER</h1>
            </div>

        </div>

    </div>
  )
}
