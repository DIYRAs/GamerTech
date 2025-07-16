import React from 'react'
import FooterList from '../../../components/sections/Footer/FooterList'
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex flex-col justify-center w-full gap-8 px-6 py-10 text-white border-t lg:px-18'>
            <p className='text-2xl font-bold tracking-widest'>GamerTech</p>
            <div className='flex flex-col justify-between w-full gap-y-5 lg:flex-row'>
                <div className='flex justify-between w-full lg:w-1/2'>
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

                <div className='w-full space-y-5 lg:w-1/3'>
                    <p className='text-justify opacity-50'>"GamerTech" is a brand name or concept for your gaming e-commerce
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