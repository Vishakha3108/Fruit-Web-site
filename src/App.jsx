import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Menus from './Components/Menus/Menus'
import Banner from './Components/Banners/Banner'
import Banner2 from './Components/Banners/Banner2'
import Banner3 from './Components/Banners/Banner3'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Menus></Menus>
      <Banner></Banner>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Footer></Footer>
    </main>
    </>
  )
}

export default App
