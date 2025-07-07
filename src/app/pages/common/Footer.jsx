"use client"
import React, { useEffect, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';




export default function Footer() {


    let [topRatedProdt, setTopRatedProdt] = useState([]);

    let getProduct = async () => {
        let productData = await axios.get('https://dummyjson.com/products?limit=2&skip=40');
        setTopRatedProdt(productData.data.products)
    }

    useEffect(() => {
        getProduct();
    }, [])

    // console.log(topRatedProdt);

    return (
        <section>
            <div className='my-8 lg:w-[1320px] w-full mx-auto grid lg:grid-cols-[35%_20%_20%_25%]'>

                <div className='p-5'>

                    <h1 className='text-[20px] font-bold mb-5'>
                        Contact Us
                    </h1>
                    <ul className='text-[14px] text-[#5a5a5a]'>
                        <li className='mb-2'>
                            Address: Claritas est etiam processus dynamicus
                        </li>
                        <li className='mb-2'>
                            Phone:
                            <a href="tel:+91 98745612330" className='hover:text-[#C09578] duration-200'>98745612330</a>
                        </li>
                        <li className='mb-2'>
                            Email:
                            <a href="mailto:furnitureinfo@gmail.com" className='hover:text-[#C09578] duration-200'>furnitureinfo@gmail.com</a>
                        </li>
                    </ul>

                    <div className='flex justify-start items-center gap-3 mt-5'>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className='border border-[#5a5a5a] text-[#5a5a5a] rounded-full p-[10px] hover:border-[#C09578] hover:text-[#C09578] duration-200'>
                            <FaFacebookF />
                        </a>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className='border border-[#5a5a5a] text-[#5a5a5a] rounded-full p-[10px] hover:border-[#C09578] hover:text-[#C09578] duration-200'>
                            <FaInstagram />
                        </a>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className='border border-[#5a5a5a] text-[#5a5a5a] rounded-full p-[10px] hover:border-[#C09578] hover:text-[#C09578] duration-200'>
                            <FaTwitter />
                        </a>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className='border border-[#5a5a5a] text-[#5a5a5a] rounded-full p-[10px] hover:border-[#C09578] hover:text-[#C09578] duration-200'>
                            <FaLinkedinIn />
                        </a>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className='border border-[#5a5a5a] text-[#5a5a5a] rounded-full p-[10px] hover:border-[#C09578] hover:text-[#C09578] duration-200'>
                            <FaYoutube />
                        </a>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className='border border-[#5a5a5a] text-[#5a5a5a] rounded-full p-[10px] hover:border-[#C09578] hover:text-[#C09578] duration-200'>
                            <FaTelegramPlane />
                        </a>
                    </div>

                </div>
                <div className='p-5'>

                    <h1 className='text-[20px] font-bold mb-5'>
                        Information
                    </h1>
                    <ul className='text-[14px] text-[#5a5a5a]'>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                About Us
                            </Link>
                        </li>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                Frequently Questions
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className='p-5'>

                    <h1 className='text-[20px] font-bold mb-5'>
                        My Account
                    </h1>
                    <ul className='text-[14px] text-[#5a5a5a]'>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                My Dashboard
                            </Link>
                        </li>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                Wishlist
                            </Link>
                        </li>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                Cart
                            </Link>
                        </li>
                        <li className='mb-2 hover:text-[#C09578] duration-200'>
                            <Link href={'/'}>
                                Checkout
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className='p-5'>

                    <h1 className='text-[20px] font-bold mb-5'>
                        Top Rated Products
                    </h1>

                    {
                        topRatedProdt.map((item, index) => {

                            let price = item.price; // discounted price
                            let dis = item.discountPercentage; // discount in %

                            let original_price = price / (1 - dis / 100);
                            original_price = original_price.toFixed(2); // optional: round to 2 decimal places

                            return (
                                <div className='flex justify-start items-center gap-3 mb-5' key={index}>
                                    <div>
                                        <Link href={`/product/${item.id}`}>
                                            <img src={item.thumbnail} alt="" className='w-[100px]' />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className='text-[12px] text-[#5a5a5a] mb-1'>
                                            {item.category}
                                        </p>
                                        <p className='mb-2'>
                                            <Link href={`/product/${item.id}`} className='text-[16px] text-[rgb(28,69,108)] hover:text-[#C09578] duration-200'>
                                                {item.title}
                                            </Link>
                                        </p>
                                        <p>
                                            <span className='line-through mr-2'>
                                                Rs. {original_price}
                                            </span>
                                            <span className='text-[#C09578] font-bold'>
                                                Rs. {price}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>

            </div>



            <div className='my-8 lg:w-[1320px] w-full mx-auto'>
                <div className='h-[1px] bg-[#EBEBEB] w-full'></div>

                <div className='py-3'>
                    <ul className='flex justify-center items-center gap-5'>
                        <li>
                            <Link href={'/'} className='text-[16px] text-[#5a5a5a] hover:text-[#C09578] duration-200'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className='text-[16px] text-[#5a5a5a] hover:text-[#C09578] duration-200'>
                                Online Store
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className='text-[16px] text-[#5a5a5a] hover:text-[#C09578] duration-200'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className='text-[16px] text-[#5a5a5a] hover:text-[#C09578] duration-200'>
                                Terms Of Use
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='h-[1px] bg-[#EBEBEB] w-full'></div>
            </div>


            <div className='my-8 lg:w-[1320px] w-full mx-auto flex flex-col justify-center items-center gap-[10px]'>

                <p className='text-[14px] text-[#5a5a5a]'>
                    All Rights Reserved By Furniture | © 2025
                </p>
                <img src="/imgs/pay-accept.png" alt="" />

            </div>


        </section>
    )
}