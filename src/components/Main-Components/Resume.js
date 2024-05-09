import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header">
                        <div className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-briefcase"></i> Resume
                        </div>
                        <div className="scroll-animation h1" data-aos='fade-up'>My Work <span>Experience</span></div>
                    </div>

                    <div className="resume-timeline">
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">August 2019 - Present</span>
                            <h2 className='compnay--name'>IDX<sup>TM</sup> (Investis Digital)</h2>
                            <h2>Senior Front-End Engineer</h2>
                            <p>In my current role, I'm responsible for crafting and refining front-end components to precisely match the specifications outlined in our design mocks and to satisfy the unique requirements of our clients. Additionally, I oversee the review process of my peers' code, ensuring that it adheres to established coding standards. I play a pivotal role in monitoring the progression of push-pull requests for deployments, ensuring a smooth and efficient workflow.
                            </p>
                            <p>My expertise lies in working with Drupal 8/9, where I excel in translating designs from platforms like Figma or Zeplin into fully responsive websites. Moreover, I've had the opportunity to leverage my knowledge in W3 Standard (A/AA) Accessibility guidelines to create websites that are inclusive and accessible to all users.
                            </p>
                            <p><strong>Tech stack:</strong> Drupal 8/9, HTML, CSS, SCSS, jQuery, React Js, Photoshop, Illustrator, Figma, Zeplin</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-left'>
                            <span className="date">June 2018 - July 2019</span>
                            <h2 className='compnay--name'>World Web Technology Pvt. Ltd.</h2>
                            <h2>Front-End Developer</h2>
                            <p>In my role, I am responsible for crafting and styling front-end components in alignment with our mockups and client specifications. Additionally, I conduct training sessions for junior team members. My expertise lies in WordPress, CodeIgniter (Front-End), and Laravel (Front-End). I specialize in converting designs from Figma, Zeplin, and Photoshop into responsive websites.
                            </p>
                            <p><strong>Tech stack:</strong> WordPress, CodeIgniter(Front-End), Laravel(Front-End), HTML, CSS, SCSS, jQuery, Photoshop, Illustrator</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">October 2017 - June 2018</span>
                            <h2 className='compnay--name'>Russmedia Tech Pvt. Ltd.</h2>
                            <h2>Front-End Developer</h2>
                            <p>In my role, I am tasked with writing and styling front-end components to match our mockups and meet clients' needs. I have experience working with Symfony and specialize in converting Photoshop designs into responsive websites.
                            </p>
                            <p><strong>Tech stack:</strong> WordPress, Symfony, HTML, CSS, SCSS, jQuery, Photoshop, Illustrator</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-left'>
                            <span className="date">July 2016 - October 2017</span>
                            <h2 className='compnay--name'>CompuBrain</h2>
                            <h2>Web Developer</h2>
                            <p>In my role, I focus on writing and styling front-end components to align with our mockups and satisfy clients' needs. I have proficiency in WordPress, Static HTML, and specialize in transforming Photoshop designs into responsive websites.
                            </p>
                            <p><strong>Tech stack:</strong> WordPress, HTML, CSS, SCSS, jQuery, Photoshop, Illustrator</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">January 2016 - March 2016</span>
                            <h2 className='compnay--name'>TYMK Creative Services Pvt. Ltd. (A TYMK Group)</h2>
                            <h2>Junior PHP Developer</h2>
                            <p>In my position, I'm responsible for crafting and styling front-end components to precisely match our mockups and fulfill our clients' needs. My experience includes working with Core PHP, CodeIgniter (Front-End), and Laravel (Front-End). Additionally, I excel in converting Photoshop designs into responsive websites.
                            </p>
                            <p><strong>Tech stack:</strong> PHP, HTML, CSS, jQuery, Photoshop, Illustrator</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
