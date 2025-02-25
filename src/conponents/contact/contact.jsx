import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaWhatsappSquare } from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1dto6nc', 'template_6tuihn7', form.current, 'D4mTDUBSaM7dDZMfg')
    e.target.reset()
  };

  return (
    <div id='contact'>
      <div className="contact-header">
        <h5>Get In Touch</h5>
        <h1>Contact Me</h1>
      </div>
      <div className="contact-content">
        <div className="contact-content-item">
          <div className='knowMe'>
            <AiOutlineMail className='abouticon' />
            <h4>Email</h4>
            <h5>
              <a target='_blanck' href="https://e.mail.ru/inbox/?back=1">Send a massage</a>
            </h5>
          </div>
          <div className='knowMe'>
            <AiFillFacebook className='abouticon' />
            <h4>Facebook</h4>
            <h5>
              <a target='_blanck' href="https://www.facebook.com/hysniddin.bultakov/">Send a massage</a>

            </h5>
          </div>
          <div className='knowMe'>
            <FaWhatsappSquare className='abouticon' />
            <h4>Experience</h4>
            <h5>
              <a target='_blanck' href="">Send a massage</a>
            </h5>
          </div>
        </div>
        <div className="contact-content-item">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Your Massage' required></textarea>
            <input type='submit' value='Send Massage' className="btn btn-talk" ></input>
          </form>

        </div>
      </div>

    </div>
  )
}
