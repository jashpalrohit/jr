import React, { useState, useEffect } from 'react';

export default function Scrollnav() {
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
    <ul className="menu scroll-nav d-flex">
          <li>
              <a className={`scroll-to ${activeItem === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleItemClick('home')} aria-label='Home'>
                  <span>Home</span> <i className="las la-home"></i>
              </a>
          </li>
        <li>
              <a className={`scroll-to ${activeItem === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleItemClick('about')} aria-label='About'>
                <span>About</span> <i className="lar la-user"></i>
            </a>
        </li>
        <li>
              <a className={`scroll-to ${activeItem === 'resume' ? 'active' : ''}`} href="#resume" onClick={() => handleItemClick('resume')} aria-label='Resume'>
                <span>Resume</span> <i className="las la-briefcase"></i>
            </a>
        </li>
        <li>
              <a className={`scroll-to ${activeItem === 'services' ? 'active' : ''}`} href="#services" onClick={() => handleItemClick('services')} aria-label='Services'>
                <span>Services</span> <i className="las la-stream"></i>
            </a>
        </li>
        <li>
              <a className={`scroll-to ${activeItem === 'skills' ? 'active' : ''}`} href="#skills" onClick={() => handleItemClick('skills')} aria-label='Skills'>
                <span>Skills</span> <i className="las la-shapes"></i>
            </a>
        </li>
        <li>
              <a className={`scroll-to ${activeItem === 'portfolio' ? 'active' : ''}`} href="#portfolio" onClick={() => handleItemClick('portfolio')} aria-label='Porfolios'>
                <span>Portfolios</span> <i className="las la-grip-vertical"></i>
            </a>
        </li>
        <li>
              <a className={`scroll-to ${activeItem === 'testimonial' ? 'active' : ''}`} href="#testimonial" onClick={() => handleItemClick('testimonial')} aria-label='Testimonial'>
                <span>Testimonial</span> <i className="lar la-comment"></i>
            </a>
        </li>
        <li>
              <a className={`scroll-to ${activeItem === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => handleItemClick('contact')} aria-label='Contact'>
                <span>Contact</span> <i className="las la-envelope"></i>
            </a>
        </li>
    </ul>
  )
}
