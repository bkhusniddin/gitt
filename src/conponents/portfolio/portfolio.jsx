import React from 'react';
import './portfolio.css';
import pimg from '../../img/portfolio.bmp';
import mont from '../../img/mont.png';
import luminate from '../../img/luminate.png';
import prime from '../../img/prime.png';
import youtube from '../../img/youtube.png';
import evotechacademy from '../../img/evotechacademy.png';
import news from '../../img/news.png';
export const Portfolio = () => {
  return (
    
    <div id='portfolio'>
        <h5>My Recent Work</h5>
        <h1>Portfolio</h1>
        <div className="portfolio-project">
            <div className="project-item">
                <img src={mont} alt="error" />
                <h4>montwater <br /> Html + Css + Js</h4>
                <a href="https://github.com/bkhusniddin/Hello.git" className='btn btn-cv'>Github</a>
                <a href="https://montwater.vercel.app/" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={evotechacademy} alt="error" />
                <h4>evotechacademy <br /> Html + Css + Js + Bootstrap</h4>
                <a href="https://github.com/bkhusniddin/evotech-academy.git" className='btn btn-cv'>Github</a>
                <a href="https://evotechacademy.vercel.app/" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={luminate} alt="error" />
                <h4>Luminate <br /> React + TypeScript + Vite + Tailwind</h4>
                <a href="https://github.com/bkhusniddin/Luminate.git" className='btn btn-cv'>Github</a>
                <a href="https://luminate-seven.vercel.app/ideas" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={prime} alt="error" />
                <h4>PrimePay: <br /> React + Tailwind</h4>
                <a href="https://github.com/bkhusniddin/prime.git" className='btn btn-cv'>Github</a>
                <a href="https://prime-woad.vercel.app/" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={youtube} alt="error" />
                <h4>Youtube <br /> React </h4>
                <a href="https://github.com/bkhusniddin/youtube-api.git" className='btn btn-cv'>Github</a>
                <a href="https://youtube-ashen.vercel.app/" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={news} alt="error" />
                <h4>News <br /> Html + Css + Js</h4>
                <a href="https://github.com/bkhusniddin/news.git" className='btn btn-cv'>Github</a>
                <a href="https://news-three-hazel.vercel.app/" className='btn btn-talk'>Live Demo</a>
            </div>
           
        </div>
    </div>
  )
}
