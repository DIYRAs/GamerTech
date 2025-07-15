import React from 'react'
import Hero from './sections/Hero'
import Items from './sections/items'
import Featured from './sections/Featured'
import Footer from './sections/Footer'
import Navbar from '../global/Navbar'

const MainPage = () => {
  return (
    <div className='bg-[#28272B]'>
      <Navbar />
      <Hero />
      <Items />
      <Featured />
      <Footer />
    </div>
  )
}

export default MainPage