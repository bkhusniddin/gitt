import React from 'react';
import './about.css';
import Menjpg from '../../img/Mejpg.png';
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import {BsEmojiSmile} from 'react-icons/bs'

export const About = () => {
  return (
    <div id='about' className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="section">
        <div className='img'>
          <img src={Menjpg} alt="Error" />
        </div>
        <div className='yarn'>
          <div className='know'>
            <div className='knowMe'>
              <FiAward className='abouticon' />
              <h4>Experience</h4>
              <h5>3+ Years Working</h5>
            </div>
            <div className='knowMe'>
              <FiUsers className='abouticon' />
              <h4>Clients</h4>
              <h5>100+ Woldwide</h5>
            </div>
            <div className='knowMe'>
              <VscFolderLibrary className='abouticon' />
              <h4>Projects</h4>
              <h5>50+ Completed</h5>
            </div>
          </div>
          <div className='abouttext'>
            I am a frontend developer with a passion for building beautiful and functional web applications. 
            <ul >
              <li> <br /></li>
              <li> <BsEmojiSmile/> Loves to solve complex problems in diverse domains </li>
              <li><BsEmojiSmile/> Humanity's joy is my joy</li>
              <li><BsEmojiSmile/> Always do good to people</li>
            </ul>
          </div>
          <a href="#contact" className='btn btn-talk'>Let's Talk</a>
        </div>
      </div>

    </div>
  )
}
