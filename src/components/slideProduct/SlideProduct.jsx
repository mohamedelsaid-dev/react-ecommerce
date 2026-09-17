import React from 'react'
import Product from './Product'
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';



function SlideProduct({ data, title, description }) {

    return (
        <div className="slide_products slide">
            <div className="container">
                <div className="top_slide">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {data.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Product item={item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>

        </div>
    )
}

export default SlideProduct