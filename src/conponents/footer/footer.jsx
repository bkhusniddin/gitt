import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
export const Footer = () => {
    return (
        <div className='footer'>
            <h1>H.BULTAKOV</h1>
            <div>
                <a href="#" >Home </a>
                <a href="#about" >About</a>
                <a href="#experience" >Experience</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
            <span>
                <a href="https://www.instagram.com/b.khusniddin_/" target='_blank'><BsInstagram /></a>
                <a href="https://t.me/bkhusniddin" target='_blank'><BsTelegram /></a>
                <a href="https://facebook.com/hysniddin.bultakov" target='_blank'><BsFacebook /></a>
            </span>
            <h5>&copy; H.BULTAKOV design</h5>
        </div>
    )
}
