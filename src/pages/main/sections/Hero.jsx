import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiCirclePlus } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className='relative z-10 flex items-center justify-center w-full h-screen text-white px-36'>
            <h1 className='absolute text-[15rem] top-[15%] left-[10%] font-black opacity-20 z-0'>MOUSE</h1>
            {/* LEFT SIDE */}
            <div className='relative z-10 w-1/2 space-y-24'>
                <div className='space-y-7'>
                    <h1 className='text-5xl font-bold leading-snug'>SteelSeries Aerox 3 Wireless</h1>
                    <p className='text-sm'>
                        The SteelSeries Aerox 3 Wireless mouse has an ultra-lightweight
                        66g design perfectly optimized for the fastest super light mouse swipes.
                    </p>
                </div>
                <div className='*:grid *:grid-cols-2 space-y-18 *:gap-8 w-max'>
                    <div className='text-2xl font-bold'>
                        <h5 className='line-through opacity-50'>$299,-</h5>
                        <h5 className='text-blue-600'>$199,-</h5>
                    </div>
                    <div className='text-sm font-semibold *:cursor-pointer'>
                        <span className='flex gap-1 text-xs place-items-center'> <CiCirclePlus size={'25px'} /> ADD TO CART</span>
                        <h3>MORE DETAILS</h3>
                    </div>
                </div>
            </div>
            {/* END LEFT SIDE */}

            {/* RIGHT SIDE */}
            <div className='relative z-10 flex flex-col items-center justify-end w-1/2 h-9/12 gap-y-5'>
                <img className='absolute top-0 object-center object-contain h-[450px]'
                    src="assets/images/mouse1.webp" alt="" />

                <div className='relative flex flex-col items-center self-end justify-center *:text-3xl gap-5'>
                    <div className='absolute top-[-550%] self-end flex flex-col gap-y-3 text-2xl *:cursor-pointer'>
                        <IoIosArrowForward size={'40px'} />
                        <IoIosArrowBack size={'40px'} opacity={'70%'} />
                    </div>
                    <div className='flex items-center self-end justify-center *:text-2xl gap-10 mr-4'>
                        <p className='text-blue-600'>1</p>
                        <hr className='h-0.5 bg-black/50 w-32' />
                        <p>3</p>
                    </div>
                </div>
            </div>
            {/* END RIGHT SIDE */}
        </div>
    )
}

export default Hero