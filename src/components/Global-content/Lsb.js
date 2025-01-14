import React from 'react';
export default function Lsb() {
  return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="./assets/images/jashpalrohit-jr-logo.png" alt="Jashpal Rohit Logo"/>
                <span className="designation">Senior Front-End Engineer</span>
            </div>
            <img className="me" src="./assets/images/background/jashpalrohit-about.jpg" alt="Me"/>
      <div className="email h2"><a href='mailto:jassirohit02@gmail.com' title='Mail to Jashpal Rohit'>jassirohit02@gmail.com</a></div>
            <div className="h2 address">Base on Vadodara, Gujarat</div>
          <p className="copyright"><span>&copy; 2025 Jashpal Rohit. Made with
              <i className="las la-heart"></i> in
              INDIA.</span></p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="tel:+919408083510" rel='noreferrer' title="Call - Opens in a new window"><i className="la la-phone"></i></a>
        </li>
              <li>
          <a href="skype:live:jassirohit02?chat" target='_blank' rel='noreferrer' title="Skype - Opens in a new window"><i className="lab la-skype"></i></a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/jashpalrohit/" target='_blank'  rel='noreferrer' title="LinkedIn - Opens in a new window"><i className="lab la-linkedin-in"></i></a>
              </li>
             
                
            </ul>
            <a href="./assets/cv/Jashpal-Rohit__CV.pdf" target="_blank" title='Jashpal Rohit - Download CV' className="theme-btn">
                <i className="las la-download"></i> DOWNLOAD CV!
            </a>
        </div>
  )
}   
