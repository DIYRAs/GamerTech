import React, { useRef, useState } from 'react'
import { CiCircleMinus } from "react-icons/ci";

const ItemCard = ({ price, item, src, alt = null, border }) => {
    const imgRef = useRef()
    const [leftOffset, setLeftOffset] = useState(0)

    let borderStyle = 'border border-l-0'
    border == 'right' ? borderStyle = 'border border-r-0' : borderStyle = 'border border-l-0'

    return (
        <div className={`relative flex items-center justify-between w-full h-full border-white/30 overflow-hidden ${borderStyle}`}>
            <div className='relative z-10 flex flex-col justify-between h-full p-10'>
                <div>
                    <p>Starting from</p>
                    <p className='text-xl font-semibold text-blue-600'>{price}</p>
                </div>
                <div className='space-y-3 *:cursor-pointer'>
                    <p className='text-2xl font-bold'>{item}</p>
                    <span className='flex gap-2 place-items-center'> <CiCircleMinus size={'30px'} /> BROWSE</span>
                </div>
            </div>

            <h1 className='absolute text-[8rem] z-0 font-bold opacity-10 bottom-8 -left-10'>{item ? item.toUpperCase() : null}</h1>
            <img
                style={{ right: `${leftOffset}px` }}
                className='absolute top-2 object-contain object-center h-[120%] z-10'
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