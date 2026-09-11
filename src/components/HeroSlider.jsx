import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import bannerHero1 from '../img/banner_Hero1.jpg';
import bannerHero2 from '../img/banner_Hero2.jpg';
import bannerHero3 from '../img/banner_Hero3.jpg';




function HeroSlider() {
    return (
        <>

            <div className="hero">
                <div className="container">

                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Smart Home <br /> Speaker</h3>
                                <p>Powerful sound. Smart features. Everyday convenience.</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>

                            <img src={bannerHero1} alt="Smart Home Speaker" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Gaming Accessories <br /> For Every Player</h3>
                                <p>Take your gaming experience to the next level.</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={bannerHero2} alt="Gaming Accessories" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Portable Music <br /> Player</h3>
                                <p>Enjoy your favorite music wherever you go.</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={bannerHero3} alt="Portable Music Player" />
                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>



        </>
    )
}

export default HeroSlider