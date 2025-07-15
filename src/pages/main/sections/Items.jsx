import React from 'react'
import ItemCard from '../../../components/sections/ItemsPage/ItemCard'

const Items = () => {
    return (
        <div className='relative z-10 grid w-full h-screen grid-cols-2 grid-rows-2 text-white'>
            <ItemCard
                item={'Mouse'}
                price={'$19,-'}
                src={'assets/images/mouse2.webp'}
                alt={'Gaming Mouse'} />

            <ItemCard
                item={'Keyboard'}
                price={'$25,-'}
                src={'assets/images/keyboard1.webp'}
                alt={'Gaming Keyboard'}
                border={'right'} />

            <ItemCard
                item={'Headset'}
                price={'$49,-'}
                src={'assets/images/headset1.webp'}
                alt={'Gaming Headset'} />

            <ItemCard
                item={'Mousepad'}
                price={'$10,-'}
                src={'assets/images/mousepad1.webp'}
                alt={'Gaming Mousepad'}
                border={'right'} />
        </div>
    )
}

export default Items