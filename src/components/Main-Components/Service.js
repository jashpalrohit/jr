import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <div className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </div>
                    <div className="h1 scroll-animation" data-aos='fade-up'>My <span>Specializations</span></div>
                </div>

                <div className="services-items">
                      <div className="service-item scroll-animation" data-aos='fade-up'>
                          <i className="las la-code"></i>
                          <h2>Website Design / Development</h2>
                          <p>Create a user-friendly website so your visitor can easily maneuver from one page to another. Design web Templates, Static/Dynamic Websites, Customized Websites etc.. </p>
                      </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                          <h2>Graphics Design</h2>
                          <p>Create Graphics for your Business, By graphic design and visual branding, companies build a lasting relationship with clients. Design a Logo, Brochure, Visiting Cards etc..</p>
                    </div>
                   
                </div>    
            </div>
        </div>
    </section>
  )
}
