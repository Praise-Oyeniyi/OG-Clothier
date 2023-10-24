import React from 'react'

export default function Newsletter() {
  return (
    <div className='border-y border-white'>
        <div className='w-[90%] mx-auto flex-center justify-between py-7 font-medium'>
            <h4 className='text-2xl tracking-wide text-white'>Subscribe to our newsletter</h4>


            <form action="" method="post " className='flex-center justify-between w-3/6 border border-white p-3 '>
                <input type="email" name="Email" id="Email" placeholder='yourname@email.com'className='w-full bg-l-black text-white outline-none'/>
                <button type="submit">

                </button>
            </form>
        </div>
    </div>
  )
}
