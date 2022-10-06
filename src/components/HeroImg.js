import './heroImg.css';
 import React from 'react'
 import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';
 
 function HeroImg() {
   return (
     <div className='hero'>
      <div className='mask'>
        <img src={IntroImg} alt="intro-img" className="intro-img" />
      </div>
      <div className="content">
        <p>Hi, I'M A</p>
        <h1>Web Developer</h1>
        <div>
            <Link to='/project' className='btn' >Projects</Link>
            <Link to='/contact' className='btn btn-light' >Contact</Link>

        </div>
      </div>
     </div>
   )
 }
 
 export default HeroImg
 