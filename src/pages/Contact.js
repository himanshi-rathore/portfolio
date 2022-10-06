import React, { useRef, useState } from 'react'
import '../components/form.css';

// import  Form  from '../components/Form'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lqhhow4', 'template_pfulfbb', form.current, '07Idh07BB3reMqBHh')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>
       <Navbar />
       <HeroImg2 heading="CONTACT" text="Lets have a chat" />
       <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input name='user_name' type='text'></input>
            <label>Email</label>
            <input name='user_email' type='email'></input>
            <label>Subject</label>
            <input  type='text'></input>
            <label>Message</label>
           <textarea name='message' rows='6' placeholder="Type Your message here" />
           <button className='btn'>Submit</button>
           <span>{done && "Thanks For contacting me!"}</span>
        </form>
    </div>
      <Footer />
    </div>
  )
}

export default Contact
