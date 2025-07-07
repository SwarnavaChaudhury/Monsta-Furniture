"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './SliderStyle.css'



export default function Slider() {

    let sliderDtls = ['slider-1.jpg', 'slider-2.jpg'];

    return (
        <section>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliderDtls.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <img src={`/imgs/slider/${item}`} alt="" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
