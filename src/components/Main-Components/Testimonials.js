import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import 'aos/dist/aos.css'

export default function Testimonials() {



    return (
        <section className="testimonial-area page-section scroll-to-page" id="testimonial">

            <div className="custom-container">
                <div className="testimonial-content content-width">
                    <div className="section-header">
                        <div className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="lar la-comment"></i> testimonial
                        </div>
                        <div className="h1 scroll-animation" data-aos='fade-up'>Trusted by <span>Many People's</span></div>
                    </div>
                    <div className="testimonial-slider-wrap scroll-animation" data-aos='fade-up'>

                        <Swiper
                            pagination={{
                                type: 'fraction',
                                el: ".testimonial-slide-count",
                            }}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            loop={true}
                            autoHeight={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <div className="right">
                                                <h3>Dhaval Karkhanis</h3>
                                                <p className="designation">Technical Project Manager, <span>QED42</span></p>
                                            </div>
                                        </div>
                                        <p>"Jashpal is known to be a problem solver and out of the box thinker. His deep knowledge of Drupal and solution centric approach helped us deliver amazing projects to the client. His efficiency in his work and ability to mentor others is really appreciated."</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <div className="right">
                                                <h3>Palak Patel</h3>
                                                <p className="designation">Web Developer, <span>CompuBrain</span></p>
                                            </div>
                                        </div>
                                        <p>"I worked with Jashpal Rohit on several projects and his know-how, flexibility, and enthusiasm are what kept me to do more work with him. Jashpal Rohit is always creative, attentive to detail, and consistent in meeting deadlines and has a strong understanding of current UI/UX designer best practices."</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <div className="right">
                                                <h3>Ritesh Patel</h3>
                                                <p className="designation">Manager, Agile Program Management (Delivery, Product), <span>Publicis Sapient</span></p>
                                            </div>
                                        </div>
                                        <p>"Jashpal brings pixels to life! His clean code and creative flair craft stunning UIs that are both beautiful and functional. Master of responsiveness, Jashpal's websites and apps shine across any screen. A developer who truly understands user experience. Jashpal's collaborative spirit makes him a dream teammate. He solves problems with a smile and keeps projects moving smoothly. Need a frontend rockstar? Look no further than Jashpal. His technical expertise and passion for code will elevate your projects to the next level."</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <div className="right">
                                                <h3>Harshit Patel</h3>
                                                <p className="designation">Web Application Developer <span>ErrorX IT Solutions</span></p>
                                            </div>
                                        </div>
                                        <p>"We met first at our graduation where we both were pursuing engineering. We became colleagues at CompuBrain where we worked on many projects. He is a kind and a hard working person as well as he loves his work to. As a former colleague, I would love to work with him in the future as well."</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className="testimonial-footer-nav">
                            <div className="testimonial-nav d-flex align-items-center">
                                <button className="prev"  ><i className="las la-angle-left"></i></button>
                                <div id="testimonial-slide-count" className="testimonial-slide-count"></div>
                                <button className="next"  ><i className="las la-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}