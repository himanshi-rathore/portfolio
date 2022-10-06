import './footer.css';
import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className='left'>
            <div className='phone'>
               <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} /> 9555489461</h4>
            </div>
            <div className='email'>
               <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} /> himanshi6015@gmail.com</h4>
            </div>
        </div>
        <div className='right'>
        <h4>About Me</h4>
        <p>This is Himanshi Rathore. I m a Web Developer with a good command on Reactjs and its framworks .</p>
        <div className="social">
        <a href='https://github.com/himanshi-rathore'><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
        <a href='https://www.linkedin.com/in/himanshi-rathore-9838b9228/'>
        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} /> 

        </a>
        

        </div>
      </div>
    </div>
    </div>
  )
}
 
export default Footer
