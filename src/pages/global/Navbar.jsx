import React from 'react'
import List from '../../components/global/List'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-5 py-5 text-white lg:px-10 bg-white/10 backdrop-blur-md'>
            <p className='text-lg font-bold tracking-widest'>GamerTech</p>

            <div className='hidden lg:inline'>
                <List lists={['Home', 'Mouse', 'Keyboard', 'Headset', 'Mousepad']}
                    listStyle={'row'}
                    gap={40} />
            </div>

            <div className='flex gap-10'>
                <div className='flex gap-2 place-items-center'>
                    <span className='w-5 h-5 border rounded-full'></span>
                    <p>DIYRA</p>
                </div>

                <button>Cart</button>
            </div>
        </div>
    )
}

export default Navbar