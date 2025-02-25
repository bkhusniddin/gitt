import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import {GrServices} from 'react-icons/gr'
import {AiTwotoneFolderOpen} from 'react-icons/ai'
import { useState } from 'react'

export const Nav = () => {
  const [activeNav, SetActiveNav] = useState('#');
  return (
    <nav>
        <a href="#" onClick={()=> SetActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><FaHome/> </a>
        <a href="#about" onClick={()=> SetActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
        <a href="#experience" onClick={()=> SetActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BiBookBookmark/></a>
        <a href="#services" onClick={()=> SetActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><GrServices/></a>
        <a href="#portfolio" onClick={()=> SetActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><AiTwotoneFolderOpen/></a>
        
      
    
    </nav >
  )
}
