import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
export const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <h5>What Skill I Have</h5>
            <h1>My Experience</h1>
            <div className="experiences">
                <div className='development'>
                    <h2>Frontent Development</h2>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} HTML</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} CSS</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} JavaScript</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} Sass</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} Bootstrap</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} Vue</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} React</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} TailwindCSS</h3>
                        <h5>Experienced</h5>
                    </div>
                    
                </div>
                <div className='development'>
                    <h2>Backend Development</h2>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} Node Js</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} MongoDB</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} PHP</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} MySQL</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} Phyton</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} C#</h3>
                        <h5>Experienced</h5>
                    </div>
                    <div className='myp'>
                        <h3>{<AiFillCheckCircle/>} Java</h3>
                        <h5>Experienced</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
