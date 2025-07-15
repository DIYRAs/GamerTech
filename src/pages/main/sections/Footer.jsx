import React from 'react'
import FooterList from '../../../components/sections/Footer/FooterList'
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex flex-col justify-center w-full gap-8 py-10 text-white border-t px-18'>
            <p className='text-2xl font-bold'>GamerTech</p>
            <div className='flex justify-between w-full'>
                <div className='flex justify-between w-1/2'>
                    <FooterList
                        legend={'Content'}
                        lists={['mouse', 'Keyboard', 'Headset', 'Mousepad']} />
                    <FooterList
                        legend={'Tools'}
                        lists={['mouse']} />
                    <FooterList
                        legend={'Help'}
                        lists={['Support', 'FAQs',]} />
                    <FooterList
                        legend={'Company'}
                        lists={['About', 'Contact Us']} />
                </div>

                <div className='w-1/3 space-y-5'>
                    <p className='opacity-50 text-align'>"GamerTech" is a brand name or concept for your gaming e-commerce
                        platform that emphasizes the fusion of cutting-edge technology with
                        the gaming experience. In terms of UI (User Interface) design, this
                        theme can be reflected in various visual and interactive elements
                        to create a cohesive and engaging online shopping experience.
                    </p>
                    <div className='flex gap-3 text-4xl *:cursor-pointer'>
                        <FaDiscord color='#5865F2' />
                        <FaTwitter color='#1DA1F2' />
                    </div>
                </div>
            </div>
            <p className='pt-5 border-t'>© Tuxedo Corporation 2025</p>
        </div>
    )
}

export default Footer