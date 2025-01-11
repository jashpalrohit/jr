import React, { useState, useEffect } from 'react';

export default function Rsidemenu() {
    function addActive(){
        document.querySelector('.responsive-sidebar-menu').classList.add('active');
    }
    function removeActive(){
        document.querySelector('.responsive-sidebar-menu').classList.remove('active');
    }

    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (id) => {
        setActiveItem(id);
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveItem(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        // Identify sections to observe
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
  return (
    <div>
        <span className="icon-menu" onClick={addActive}>
                <span className="bar"></span>
                <span className="bar"></span>
        </span> 
    <div className="responsive-sidebar-menu">
        <div className="overlay" onClick={removeActive}>
        </div>
            <div className="sidebar-menu-inner">
                <div className="menu-wrap">
                    <p>Menu</p>
                    <ul className="menu scroll-nav-responsive d-flex">
                        <li onClick={removeActive}>
                            <a className={`scroll-to ${activeItem === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleItemClick('home')} aria-label='Home'>
                                <i className="las la-home"></i> <span>Home</span>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleItemClick('about')} aria-label='About'>
                                <i className="lar la-user"></i> <span>About</span>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'resume' ? 'active' : ''}`} href="#resume" onClick={() => handleItemClick('resume')} aria-label='Resume'>
                                <i className="las la-briefcase"></i> <span>Resume</span>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'services' ? 'active' : ''}`} href="#services" onClick={() => handleItemClick('services')} aria-label='Services'>
                                <i className="las la-stream"></i> <span>Services</span>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'skills' ? 'active' : ''}`} href="#skills" onClick={() => handleItemClick('skills')} aria-label='Skills'>
                                <i className="las la-shapes"></i> <span>Skills</span>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'portfolio' ? 'active' : ''}`} href="#portfolio" onClick={() => handleItemClick('portfolio')} aria-label='Portfolios'>
                                <i className="las la-grip-vertical"></i> <span>Portfolios</span>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'testimonial' ? 'active' : ''}`} href="#testimonial" onClick={() => handleItemClick('testimonial')} aria-label='Testimonial'>
                                <i className="lar la-comment"></i> <span>Testimonial</span>
                            </a>
                        </li>
                          <li onClick={removeActive}>
                              <a className={`scroll-to ${activeItem === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => handleItemClick('contact')} aria-label='Contact'>
                                <i className="las la-envelope"></i> <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="sidebar-social">
                    <p>Social</p>
                    <ul className="social-links d-flex align-items-center">
                          <li>
                              <a href="tel:+919408083510" rel='noreferrer' title="Call - Opens in a new window"><i className="la la-phone"></i></a>
                          </li>
                          <li>
                              <a href="skype:live:jassirohit02?chat" target='_blank' title="Skype - Opens in a new window"><i className="lab la-skype"></i></a>
                          </li>
                          <li>
                              <a href="https://www.linkedin.com/in/jashpalrohit/" target='_blank' title="LinkedIn - Opens in a new window"><i className="lab la-linkedin-in"></i></a>
                          </li>
                         
                    </ul>
                </div>
            </div>
    </div>
    </div>
  )
}
