import React, { useRef, useState } from 'react'
import { CiCircleMinus } from "react-icons/ci";

const ItemCard = ({ price, item, src, alt = null, border }) => {
    const imgRef = useRef()
    const [leftOffset, setLeftOffset] = useState(0)

    let borderStyle = 'border border-l-0'
    border == 'right' ? borderStyle = 'border border-r-0' : borderStyle = 'border border-l-0'

    return (
        <div className={`relative flex items-center justify-between w-full h-full border-white/20 overflow-hidden ${borderStyle}`}>
            <div className='relative z-10 flex flex-col items-center justify-between w-full h-full p-3 lg:p-10'>
                <div className='self-start'>
                    <p className='text-sm md:text-lg'>Starting from</p>
                    <p className='text-xl font-semibold text-blue-400'>{price}</p>
                </div>
                <img
                    className='object-contain object-center h-[130px] z-10 lg:hidden'
                    src={src} alt={alt ? alt : item} />
                <div className='lg:space-y-3 space-y-1 *:cursor-pointer self-start'>
                    <p className='text-lg font-bold lg:text-2xl'>{item}</p>
                    <span className='flex gap-1 text-sm md:gap-2 place-items-center'> <CiCircleMinus className='text-xl lg:text-3xl' /> BROWSE</span>
                </div>
            </div>

            <h1 className='absolute md:text-[8rem] text-4xl z-0 font-bold opacity-10 bottom-8 -left-10'>{item ? item.toUpperCase() : null}</h1>
            <img
                style={{ right: `${leftOffset}px` }}
                className='lg:inline hidden absolute top-2 object-contain object-center h-[120%] z-10'
                src={src} alt={alt ? alt : item}
                ref={imgRef}
                onLoad={() => {
                    if (imgRef.current) {
                        const width = imgRef.current.getBoundingClientRect().width
                        setLeftOffset(-0.4 * width)
                    }
                }} />
        </div>
    )
}

export default ItemCard