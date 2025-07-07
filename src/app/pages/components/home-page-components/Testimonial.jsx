"use client"
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Testimonial({ testi_dta }) {

    // console.log(testi_dta)

    return (

        <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}

            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            {/* ---------------------- */}
            {
                testi_dta.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='border border-gray-300 shadow-[inset_0px_0px_5px_3px_#ccc] py-10'>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='flex justify-center items-start gap-5 lg:px-[200px] px-[50px]'>
                                        <FaQuoteLeft className='text-[50px] text-gray-500' />
                                        {item.comment}
                                    </p>
                                    {
                                        item.date
                                            ?
                                            <p className='text-gray-500 text-right'>
                                                {/* ~ 2025-05-12 12:25:53 */}
                                                ~ {item.date}
                                            </p>
                                            :
                                            ''
                                    }

                                    <div className='mt-5'>
                                        {
                                            item.userimg.length > 0
                                                ?
                                                <img src={item.userimg} alt="user icon" className='w-[100px]' />
                                                :
                                                <img src="/imgs/user.png" alt="user icon" className='w-[100px]' />
                                        }
                                    </div>
                                    <h1 className='text-[20px] font-bold my-3'>
                                        {item.username}
                                    </h1>
                                    <span className='text-gray-500'>
                                        {item.designation}
                                    </span>
                                    <div className='flex justify-center items-center text-yellow-500 mt-5'>
                                        {
                                            Array(item.rating).fill().map((_, index) => (
                                                <FaStar key={index} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            {/* ---------------------- */}

        </Swiper>

    )
}