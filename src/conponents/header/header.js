import React from 'react'
import { Tj } from './tj/tj'
import './header.css'
import Me from '../../img/pMe.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { About } from '../about/About'
import { Experience } from '../experience/experience'
import { Nav } from '../nav/nav'
import { Services } from '../services/services'
import { Portfolio } from '../portfolio/portfolio'
import { Contact } from '../contact/contact'
import { Footer } from '../footer/footer'
import { Time } from '../Time/time'

export const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <h5>Hello I'm</h5>
                    <h1>Husniddin Bultakov</h1>
                    <h5>Fullstack Developer</h5>
                    <Time/>
                    <Tj />
                    <div className="me">
                        <div className="meLink">
                            <a href="https://yandex.uz/" target='_blank'><FaLinkedin /></a>
                            <a href="https://github.com/bkhusniddin" target='_blank'><BsGithub /></a>
                            <a href="#" target='_blank'><ImWhatsapp /></a>
                            <a href="https://www.instagram.com/b.khusniddin_/" target='_blank'><BsInstagram /></a>
                            <a href="https://t.me/bkhusniddin" target='_blank'><BsTelegram /></a>
                            <a href="https://twitter.com/bkhusniddin" target='_blank'><BsTwitter /></a>
                            <a href="https://facebook.com/hysniddin.bultakov" target='_blank'><BsFacebook /></a>
                        </div>
                        <div className="meImg">
                            <img src={Me} width="100%" alt="Error" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <About />
                <Experience />
                <Services />
                <Portfolio />
                <Contact />
            </div>
            <Footer />

            <Nav />

            

        </div>


    )
}
