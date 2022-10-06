import './aboutContent.css';
import reactImg from '../assets/react2.webp';
import reactImg2 from '../assets/react1.jpg';
import React from 'react'
import { Link } from 'react-router-dom';

function AboutContent() {
  return (
   <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>I m a Web Developer with good command over the tools and framworks . I  m a junior pursuing B.tech in Computer Science and Engineering. A quick learner and  team player with an effective communication and analytical skills. </p>
        <Link to='/contact'>
         <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
           
                <div className="img-stack top">
                    <img className='img' src={reactImg2} alt='react-img' />
                    
                </div>
                <div className="img-stack bottom">
                    <img className='img' src={reactImg} alt='react-img' />
                    
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default AboutContent
