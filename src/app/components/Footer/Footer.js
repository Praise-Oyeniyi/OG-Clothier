import React from 'react'
import Newsletter from './Newsletter';
import Image from 'next/image';
import FLogo from '../../../../public/Icons/footer-logo.svg';
import Facebook from '../../../../public/Icons/facebook.svg';
import Twitter from '../../../../public/Icons/twitter.svg';
import Pin from '../../../../public/Icons/pinterest.svg';
import Instagram from '../../../../public/Icons/instagram.svg';






export default function Footer() {
  return (
    <div className='bg-l-black py-10 w-full h-auto mt-16'>
        <Newsletter/>

        <div className='w-full border-b border-white py-10 md:py-0'>
            <div className="w-[90%] mx-auto md:flex-row flex-column justify-around md:h-[45vh] h-auto">
                <div className='md:w-[45%] flex-center md:items-end justify-start h-full md:pb-5'>
                    <Image src={FLogo} alt='footer logo' height={100} width={100} className='w-3/6 md:self-end self-center' />
                </div>


                <div className='md:flex-center w-full text-white items-start justify-start h-full md:border-l border-white'>

                    <div className='md:flex-row flex-column md:w-[55%] h-full md:justify-between'>
                        <div className='link-container md:w-3/6'>
                            <h4 className='link-head'>Catalogue</h4>
                                <ul className='links-box'>
                                    <li>Women</li>
                                    <li>Men</li>
                                    <li>New Collection</li>
                                    <li>Sale</li>
                                </ul>
                        </div>


                        <div className='md:border-x border-l-white link-container md:w-3/6'>
                            <h4 className='link-head'>Shop</h4>
                                <ul className='links-box'>
                                    <li>About</li>
                                    <li>Payment</li>
                                    <li>Delivery</li>
                                    <li>FAQ</li>
                                </ul>
                        </div>
                    </div>

                    
                    <div className='link-container w-auto'>
                        <h4 className='link-head'>Contacts</h4>
                            <ul className='links-box'>
                                <li>designer: toba@gmail.com</li>
                                <li>developer: oyeniyipraise@gmail.com</li>
                            </ul>
                            <div className='links-box md:w-full w-5/6'>
                                <div className="socials-top flex-center justify-between">
                                    <h5 className='flex-center justify-start'>Twitter<span><Image src={Twitter} alt='twitter logo' height={100} width={100} className='w-6 h-4 ml-3' /></span></h5>
                                    <h5 className='flex-center justify-start'>Instagram<span><Image src={Instagram} alt='instagram logo' height={100} width={100} className='w-6 h-4 ml-3' /></span></h5>
                                </div>
                                <div className="social-bttm flex-center justify-between">
                                    <h5 className='flex-center justify-start'>Facebook<span><Image src={Facebook} alt='facebook logo' height={100} width={100} className='w-6 h-4 ml-3' /></span></h5>
                                    <h5 className='flex-center justify-start'>Pinterest<span><Image src={Pin} alt='pinterest logo' height={100} width={100} className='w-6 h-4 ml-3' /></span></h5>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <h6 className='text-xs font-medium text-center text-white pt-7'>© All Rights Reserved. 2023, OG Clothiers Inc.</h6>
    </div>
  )
}
