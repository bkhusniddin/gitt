import React from 'react'
import './tj.css'
import CV from './cv.pdf'
export const Tj = () => {
  return (
    <div className='cv'>
        <a href={CV} className="btn btn-cv" download>Download CV</a>
        <a href="#contact" className='btn btn-talk'>Let's Talk</a>
    </div>
  )
}
