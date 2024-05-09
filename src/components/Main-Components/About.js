import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <div className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </div>
                    <div className="scroll-animation h1" data-aos='fade-up'>Every great design begin with<br/>
                        an even <span>better story</span></div>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Since beginning my journey as a Jr. PHP Developer nearly 8 years ago,
                I got an interest towards the Front-End designing so I decided to change my field from PHP Developer to Front-End Designing. 
                
                I've done on-site and remote work for companies, and collaborated with 
                    talented people to create digital websites for their clients and consumer use. </p>
                  <p className="scroll-animation" data-aos='fade-up'>I approach my work with a quiet confidence, driven by an innate curiosity that fuels my desire to continually refine and enhance my design skills. With each project, I embrace the challenge of solving design problems, recognizing that growth occurs one solution at a time.</p>
            </div>
        </div>
    </section>
  )
}
