import React from 'react'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Slider from '../Components/Slider'
import CategoriesContainer from '../Components/CategoriesContainer'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div>
      <Announcements/>
      <Navbar/>
      <Slider/>
      <CategoriesContainer/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Homepage