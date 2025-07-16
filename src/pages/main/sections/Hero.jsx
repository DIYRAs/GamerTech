import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiCirclePlus } from 'react-icons/ci';

const Hero = () => {
    const { scrollYProgress } = useScroll()

    return (
        <div className='relative z-10 flex flex-col items-center justify-center w-full h-screen px-5 text-white pt-26 lg:flex-row lg:px-36'>
            <h1 className='absolute lg:text-[15rem] text-[5rem] lg:top-[15%] top-[29%] left-[10%] font-black opacity-20 z-0'>MOUSE</h1>
            {/* LEFT SIDE */}
            <div className='relative z-10 w-full space-y-9 lg:space-y-24 lg:w-1/2'>
                <div className='space-y-5 lg:space-y-7'>
                    <h1 className='text-5xl font-bold leading-[1] lg:leading-snug'>Steel Series Aerox 3 Wireless</h1>
                    <p className='text-sm'>
                        The SteelSeries Aerox 3 Wireless mouse has an ultra-lightweight
                        66g design perfectly optimized for the fastest super light mouse swipes.
                    </p>
                </div>
                <div className='*:grid *:lg:grid-cols-2 *:grid-cols-1 lg:space-y-18 space-y-8 *:lg:gap-8 w-max'>
                    <div className='gap-0 text-2xl font-bold'>
                        <h5 className='line-through opacity-50'>$299,-</h5>
                        <h5 className='text-blue-500'>$199,-</h5>
                    </div>
                    <div className='text-sm font-semibold *:cursor-pointer gap-2 mt-20 md:mt-0'>
                        <span className='flex gap-1 text-xs place-items-center'> <CiCirclePlus size={'25px'} /> ADD TO CART</span>
                        <motion.h3
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='text-xs underline md:text-[17px] hover:text-blue-400'>MORE DETAILS</motion.h3>
                    </div>
                </div>
            </div>
            {/* END LEFT SIDE */}

            {/* RIGHT SIDE */}
            <div className='relative z-10 flex flex-col items-center justify-end w-full lg:w-1/2 h-9/12 gap-y-5'>
                <motion.img
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 20
                    }}
                    className='absolute lg:top-[-10%] sm:top-[-10%] top-[-200px] lg:right-[30%] right-[20%] object-center object-contain md:h-[450px] h-[220px]'
                    src="assets/images/mouse1.webp"
                    alt=""
                />

                <div className='relative flex flex-col items-center self-end justify-center *:text-3xl gap-5'>
                    <div className='absolute top-[-500%] right-0 self-end flex flex-col gap-y-3 text-2xl *:cursor-pointer'>
                        <IoIosArrowForward size={'40px'} />
                        <IoIosArrowBack size={'40px'} opacity={'70%'} />
                    </div>
                    <div className='flex opacity-0 md:opacity-100 items-center self-end justify-center *:text-2xl gap-10 mr-[0]'>
                        <p className='text-blue-500'>1</p>
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