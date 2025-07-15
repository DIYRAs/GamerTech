import React from 'react'
import { CiCircleMinus } from 'react-icons/ci'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FeaturedCard from '../../../components/sections/FeaturedPage/FeaturedCard';

const Featured = () => {
    return (
        <div className='flex flex-col items-center justify-between w-full h-screen px-20 py-16 text-white'>
            <div className='flex items-center justify-between w-full *:cursor-pointer'>
                <p className='text-2xl font-bold'>Featured Gears</p>
                <span className='flex gap-2 place-items-center'> <CiCircleMinus size={'30px'} /> BROWSE</span>
            </div>

            <div className='flex items-center w-full justify-evenly'>
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

            <div className='relative flex flex-col items-center justify-center *:text-3xl gap-5 w-full'>
                <div className='absolute top-[-300%] self-end flex flex-col gap-y-5 text-2xl *:cursor-pointer'>
                    <IoIosArrowForward size={'40px'} />
                    <IoIosArrowBack size={'40px'} opacity={'70%'} />
                </div>
                <div className='flex items-center justify-center *:text-2xl gap-5 mr-8 *:cursor-pointer'>
                    <p className='text-blue-600'>1</p>
                    <hr className='h-0.5 bg-black/50 w-32' />
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}

export default Featured