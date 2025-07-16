import React from 'react'
import { CiCircleMinus } from 'react-icons/ci'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FeaturedCard from '../../../components/sections/FeaturedPage/FeaturedCard';

const Featured = () => {
    return (
        <div className='flex flex-col items-center justify-between w-full min-h-screen gap-16 px-6 text-white lg:gap-0 lg:py-16 py-7 lg:px-20'>
            <div className='flex items-center justify-between w-full *:cursor-pointer'>
                <p className='text-xl font-bold md:text-2xl'>Featured Gears</p>
                <span className='flex gap-1 text-sm md:gap-2 place-items-center'> <CiCircleMinus className='text-xl lg:text-3xl' /> BROWSE</span>
            </div>

            <div className='flex flex-wrap items-center w-full *:p-8 gap-2 md:flex-wrap lg:flex-row lg:gap-0 justify-evenly'>
                <FeaturedCard
                    item={'Aerox 3 Wireless'}
                    price={'$199,-'}
                    src={'assets/images/mouse1.webp'}
                    alt={'Gaming Mouse'} />
                <FeaturedCard
                    item={'Corsair K95 RGB'}
                    price={'$299,-'}
                    src={'assets/images/keyboard1.webp'}
                    alt={'Gaming Keyboard'}
                    imgStyle={'rotate-[90deg] scale-[1.5]'} />
                <FeaturedCard
                    item={'KG2000'}
                    price={'$149,-'}
                    src={'assets/images/headset1.webp'}
                    alt={'Gaming Headset'}
                    imgStyle={'scale-[1.4]'} />
                <FeaturedCard
                    item={'Featured Gears'}
                    price={'$49,-'}
                    src={'assets/images/mouse2.webp'}
                    alt={'Gaming Mouse'} />
            </div>

            <div className='hidden relative lg:flex flex-col items-center justify-center *:text-3xl gap-5 w-full'>
                <div className='absolute top-[-900%] self-end flex flex-col gap-y-5 text-2xl *:cursor-pointer'>
                    <IoIosArrowForward size={'40px'} />
                    <IoIosArrowBack size={'40px'} opacity={'70%'} />
                </div>
                <div className='flex items-center justify-center *:text-2xl gap-5 mr-8 *:cursor-pointer'>
                    <p className='text-blue-500'>1</p>
                    <hr className='h-0.5 bg-black/50 w-32' />
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}

export default Featured