import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <div className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-grip-vertical"></i> portfolio
                    </div>
                      <div className="h1 scroll-animation">Featured <span>Projects</span></div>
                     
                </div>

                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                  <a href="./assets/images/portfolio/tappwater.png" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio/tappwater.png" alt="ArkinsRealis"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li><p>WordPress</p></li>
                                      <li><p>WooCommerce</p></li>
                                    <li><p>HTML/CSS</p></li>
                                    <li><p>jQuery/JavaScript</p></li>
                                </ul>
                            </div>
                              <h2><a href="https://tappwater.co/" target='_blank' rel="noreferrer" title="TappWater - Opens in new window">TappWater</a></h2>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio/pensol.png" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio/pensol.png" alt="Pensol"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li>
                                        <p>PHP</p>
                                    </li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                </ul>
                            </div>
                              <h2><a href="https://pensol.com/" target='_blank' rel="noreferrer" title="Pensol - Opens in new window">Pensol</a></h2>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation"  data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio/five-petals.png" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio/five-petals.png" alt="Five Petals"/>
                                </a>

                                <ul className="portfolio-categories">
                                      <li><p>PHP</p></li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                </ul>
                            </div>
                              <h2><a href="http://www.fivepetals.in/" target='_blank' rel="noreferrer" title="Five Petals - Opens in new window">Five Petals</a></h2>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio/ce-corner.png" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio/ce-corner.png" alt="CE Corner"/>
                                </a>

                                <ul className="portfolio-categories">
                                      <li>
                                          <p>Laravel/PHP</p>
                                      </li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                </ul>
                            </div>
                              <h2><a href="https://www.cecorner.ca/" target='_blank' rel="noreferrer" title="CE Corner - Opens in new window">CE Corner</a></h2>
                        </div>
                    </div>

                      <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                          <div className="portfolio-item portfolio-half">
                              <div className="portfolio-item-inner">
                                  <a href="./assets/images/portfolio/marshmallow.png" data-lightbox="example-1">
                                      <img src="./assets/images/portfolio/marshmallow.png" alt="MarshMallow" />
                                  </a>
                                  <ul className="portfolio-categories">
                                      <li>
                                          <p>PHP</p>
                                      </li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                  </ul>
                              </div>
                              <h2><a href="https://www.marshmallow.in/" target='_blank' rel="noreferrer" title="MarshMallow - Opens in new window">Marsh Mallow</a></h2>
                          </div>
                      </div>

                      <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                          <div className="portfolio-item portfolio-half">
                              <div className="portfolio-item-inner">
                                  <a href="./assets/images/portfolio/jb-estate.png" data-lightbox="example-1">
                                      <img src="./assets/images/portfolio/jb-estate.png" alt="JB Estates" />
                                  </a>

                                  <ul className="portfolio-categories">
                                      <li><p>WordPress</p></li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                  </ul>
                              </div>
                              <h2><a href="https://johnbrayestates.co.uk/" target='_blank' rel="noreferrer" title="JB Estates - Opens in new window">JB Estates</a></h2>
                          </div>
                      </div>
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio/vimal-icecream.png" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio/vimal-icecream.png" alt="Vimal Ice Cream"/>
                                </a>

                                <ul className="portfolio-categories">
                                      <li><p>PHP</p></li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                </ul>
                            </div>
                              <h2><a href="https://vimalicecream.com/" target='_blank' rel="noreferrer" title="Vimal Ice Cream - Opens in new window">Vimal Ice Cream</a></h2>
                        </div>
                    </div>

                      <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                          <div className="portfolio-item portfolio-half">
                              <div className="portfolio-item-inner">
                                  <a href="./assets/images/portfolio/alpean.png" data-lightbox="example-1">
                                      <img src="./assets/images/portfolio/alpean.png" alt="Alpean" />
                                  </a>

                                  <ul className="portfolio-categories">
                                      <li><p>WordPress</p></li>
                                      <li><p>HTML/CSS</p></li>
                                      <li><p>jQuery/JavaScript</p></li>
                                  </ul>
                              </div>
                              <h2><a href="https://www.alpean.ch/" target='_blank' rel="noreferrer" title="Alpean - Opens in new window">Alpean</a></h2>
                          </div>
                      </div>
                      <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                          <div className="scroll-animation h1 want-see-more" data-aos="fade-up">Explore the World of Projects Awaiting Your Exploration! <a href="#contact" title="Want to See more Projects"><span>Contact Us</span></a></div>
                      </div>
                </div>


            </div>
        </div>
    </section>
  )
}
