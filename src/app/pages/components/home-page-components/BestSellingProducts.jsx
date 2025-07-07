"use client"
import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import ProductCard from '../product-page-components/ProductCard';


export default function BestSellingProducts() {

    let [bestSellingProdts, setBestSellingProdts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {
        setLoading(true);
        const productData = await axios.get(`https://dummyjson.com/products?limit=10&skip=50`);
        setBestSellingProdts(productData.data.products);
        setLoading(false);
    };


    useEffect(() => {
        getProduct();
    }, []);

    // console.log(loading);
    // console.log(bestSellingProdts);


    const swiperRef = useRef(null);



    return (
        <div className='lg:w-[1320px] w-full mx-auto lg:px-0 px-5 py-10'>
            <div className='relative'>
                <h1 className='text-2xl font-bold inline-block bg-white relative z-20 px-2'>
                    Bestselling Products
                </h1>
                <div className='h-[2px] bg-[#ccc] w-full absolute top-[50%] left-0 z-10'></div>
                <div className='absolute top-[55%] translate-y-[-50%] right-0 z-20 bg-white text-2xl'>
                    <button className='hover:text-[#C09578] duration-200 cursor-pointer' onClick={() => swiperRef.current?.slidePrev()}>
                        <MdKeyboardArrowLeft />
                    </button>
                    <button className='hover:text-[#C09578] duration-200 cursor-pointer' onClick={() => swiperRef.current?.slideNext()}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>





            <div className='mt-5'>
                {
                    loading
                        ?
                        <p className="text-center col-span-4">Loading products...</p>
                        :
                        <Swiper
                            loop={true}
                            onSwiper={(swiper) => swiperRef.current = swiper}
                            // slidesPerView={5}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 5 }
                            }}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            {
                                bestSellingProdts.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <ProductCard prodt_dtls={item} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                }
            </div>





        </div>
    )
}
