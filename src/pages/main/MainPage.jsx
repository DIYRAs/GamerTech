import React from 'react'
import Hero from './sections/Hero'
import Items from './sections/Items'
import Featured from './sections/Featured'
import Footer from './sections/Footer'
import Navbar from '../global/Navbar'

const MainPage = () => {
  return (
    <div className='bg-[#28272B] w-full'>
      <Navbar />
      <Hero />
      <Items />
      <Featured />
      <Footer />
    </div>
  )
}

export default MainPage
