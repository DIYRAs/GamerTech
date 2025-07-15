import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'

const FeaturedCard = ({ imgStyle, src, item, price, alt = null }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <img className={`drop-shadow-lg drop-shadow-white/30 w-[100px] h-[150px] object-center object-contain ${imgStyle}`} src={src} alt={alt ? alt : item} />
            <p className='text-lg'>{item}</p>
            <p className='text-lg font-bold text-blue-500'>{price}</p>
            <span className='flex text-xs cursor-pointer place-items-center'> <CiCirclePlus size={'25px'} /> ADD TO CART</span>
        </div>
    )
}

export default FeaturedCard