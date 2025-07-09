"use client";
import PageTitle from '@/app/pages/common/PageTitle';
import Testimonial from '@/app/pages/components/home-page-components/Testimonial';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";





export default function SingleProductDetails() {
    const pid = useParams();
    const product_id = pid?.pid;

    const [productDetails, setProductDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);





    useEffect(() => {
        if (product_id) {
            const fetchData = async () => {
                try {
                    setIsLoading(true); // start loading
                    const res = await axios.get(`https://dummyjson.com/products/${product_id}`);
                    setProductDetails(res.data);
                    setSelectedImage(res.data.thumbnail);
                } catch (err) {
                    console.error("Error fetching product:", err);
                } finally {
                    setIsLoading(false); // end loading
                }
            };

            fetchData();
        }
    }, [product_id]);

    if (isLoading || !productDetails) {
        return (
            <section className="py-10 text-center">
                <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>
                    Loading product details...
                </button>
            </section>
        );
    }

    
    const price = productDetails.price;
    const dis = productDetails.discountPercentage;
    const original_price = (price / (1 - dis / 100)).toFixed(2);

    // console.log(productDetails);

    let testi_dta = productDetails.reviews.map((item) => {
        const date = new Date(item.date);
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

        return {
            username: item.reviewerName,
            userimg: '',
            designation: item.reviewerEmail,
            comment: item.comment,
            rating: item.rating,
            date: formattedDate
        };
    });



    return (
        <section>
            <PageTitle pg_title={'Product Details'} />

            <div className="lg:w-[1320px] w-full mx-auto grid lg:grid-cols-[40%_auto] grid-cols-1 gap-[50px] px-4 py-10">
                <div>
                    <img src={selectedImage} alt={productDetails.title} className="w-full border rounded" />


                    <div className='flex justify-center items-center gap-5 mt-[25px] flex-wrap'>
                        {
                            productDetails.images.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt='product gallery'
                                    className={`
                                        w-[100px] border-2 rounded-md cursor-pointer transition duration-200 hover:border-[#C09578]
                                        ${selectedImage === item ? 'border-[#C09578]' : 'border-[#ccc]'}`
                                    }
                                    onClick={() => setSelectedImage(item)}
                                />
                            ))
                        }
                    </div>

                </div>
                <div className='flex justify-start items-center'>

                    <div>
                        <h1 className="text-2xl font-bold mb-4">{productDetails.title}</h1>
                        <p className="text-gray-600 mb-2">{productDetails.description}</p>
                        <p className="mb-2">
                            <span className="text-green-600 font-semibold text-xl">₹{price}</span>
                            <span className="text-gray-500 line-through ml-3">₹{original_price}</span>
                            <span className="text-red-500 ml-3">({dis}% OFF)</span>
                        </p>

                        <div className='my-5 h-[1px] bg-[#ccc]'></div>

                        <div className='flex justify-start items-center gap-5 mb-5'>
                            <button className='bg-[#C09578] py-2 px-3 text-[24px] text-white hover:bg-black duration-300 font-semibold cursor-pointer'>
                                <FaRegHeart />
                            </button>
                            <button className='w-[300px] bg-[#C09578] py-2 text-white hover:bg-black duration-300 font-semibold cursor-pointer'>
                                Add To Cart
                            </button>
                        </div>

                        <div className='text-[14px] mt-10'>
                            <div className='mb-2'>
                                Category:
                                <span className='font-bold pl-2 uppercase'>
                                    {productDetails.category}
                                </span>
                            </div>
                            <div className='mb-2'>
                                Brand:
                                <span className='font-bold pl-2 uppercase'>
                                    {productDetails.brand}
                                </span>
                            </div>
                            <div className='mb-2'>
                                Dimentions:
                                <span className='font-bold pl-2'>
                                    {productDetails.dimensions.depth} x {productDetails.dimensions.height} x {productDetails.dimensions.width}
                                </span>
                            </div>
                            <div className='mb-2'>
                                SKU:
                                <span className='font-bold pl-2'>
                                    {productDetails.sku}
                                </span>
                            </div>
                            <div className='mb-2'>
                                Status:
                                <span className='font-bold pl-2 uppercase'>
                                    {productDetails.availabilityStatus}
                                </span>
                            </div>
                            <div className='mb-2'>
                                Warranty:
                                <span className='font-bold pl-2'>
                                    {productDetails.warrantyInformation}
                                </span>
                            </div>
                            <div className='mb-2'>
                                Return Policy:
                                <span className='font-bold pl-2'>
                                    {productDetails.returnPolicy}
                                </span>
                            </div>
                            <div className='mb-2'>
                                Stock:
                                <span className='font-bold pl-2'>
                                    {productDetails.stock}
                                </span>
                            </div>
                            <div className='my-2'>
                                Tags:
                                <span className='font-light pl-2'>
                                    {
                                        productDetails.tags.map((item, index) => {
                                            return (
                                                <span className='bg-[#C09578] text-white mr-2 p-[5px] cursor-pointer rounded-lg' key={index}>
                                                    {item}
                                                </span>
                                            )
                                        })
                                    }
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* Testimonial */}
            <div className='lg:w-[1320px] w-full mx-auto lg:p-5 p-2'>

                <Testimonial testi_dta={testi_dta} />

            </div>

        </section>
    );
}
