import React from 'react';
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="Some of My Most Recent Works..."/>
      <Work />
     
      <Footer/>
    </div>
  )
}

export default Project
