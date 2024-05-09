import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <div className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </div>
                        <div className="scroll-animation h1" data-aos='fade-up'>My <span>Advantages</span></div>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/skills/drupal.png" alt="Drupal"/>
                                    <div className="percent">60%</div>
                                </div>
                              <p className="name">Drupal</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/skills/wordpress.png" alt="WordPress"/>
                                    <div className="percent">75%</div>
                                </div>
                              <p className="name">WordPress</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                  <img src="./assets/images/skills/html-css.png" alt="HTML/CSS"/>
                                    <div className="percent">95%</div>
                                </div>
                                <p className="name">HTML/CSS</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/skills/jq-javascript.png" alt="jQuery/JavaScript"/>
                                    <div className="percent">90%</div>
                                </div>
                              <p className="name">jQuery/JavaScript</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/skills/react.png" alt="React"/>
                                    <div className="percent">45%</div>
                                </div>
                                <p className="name">React</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/skills/photoshop.png" alt="Adobe Photoshop"/>
                                    <div className="percent">65%</div>
                                </div>
                              <p className="name">Adobe Photoshop</p>
                            </div>
                        </div>
                      <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                          <div className="skill">
                              <div className="skill-inner">
                                  <img src="./assets/images/skills/illustrator.png" alt="Adobe Illustrator" />
                                  <div className="percent">60%</div>
                              </div>
                              <p className="name">Adobe Illustrator</p>
                          </div>
                      </div>
                    </div>    
                </div>
            </div>
    </section>
  )
}
