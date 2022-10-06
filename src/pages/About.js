import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import AboutContent from './AboutContent'

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I m a Web-developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
