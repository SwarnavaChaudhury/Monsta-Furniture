"use client"
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';





export default function Header() {



    const monstaCart = useSelector((store) => {
        // console.log(store);
        // console.log(store.monstaCartReducer.monstaCart);
        return store.monstaCartReducer.monstaCart;
    });

    const ttlPrice = monstaCart.reduce((acc, currVal) => {
        return acc + currVal.price;
    }, 0);

    // console.log(ttlPrice.toFixed(2));

    const monstaWishlist = useSelector((store) => {
        // console.log(store);
        // console.log(store.monstaWishlistReducer.monstaWishlist);
        return store.monstaWishlistReducer.monstaWishlist;
    });




    return (
        <section className=''>

            <ToastContainer />

            <div className='lg:block hidden'>
                <div className='lg:w-[1320px] mx-auto text-[12px] flex justify-between items-center py-3'>
                    <div>
                        <span>
                            Contact us 24/7 : <a href="tel:+91 98745612330"> +91-98745612330 </a> / <a href="mailto:furnitureinfo@gmail.com"> furnitureinfo@gmail.com </a>
                        </span>
                    </div>
                    <div>
                        <button className='cursor-pointer hover:text-[#C09578] duration-200'>
                            Login / Register
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full h-[0.5px] bg-[#cccccc80]'></div>

            <div className='lg:w-[1320px] w-full mx-auto flex justify-between items-center lg:py-5 py-[20px] lg:px-0 px-5'>
                <div className='lg:basis-[50%] basis-[100%]'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <img src="/imgs/logo/site-logo.png" alt="" className='lg:w-[170px] w-[100px]' />
                        </div>



                        <div className='lg:hidden block'>

                            <div className='flex justify-between items-center gap-[50px]'>
                                <div className='flex justify-center items-center gap-[20px]'>
                                    <div className='border border-[#ccc] p-2 hover:text-[#C09578] hover:border-[#C09578] duration-200 cursor-pointer relative'>
                                        <Link href={'/'} className=''>
                                            <FaHeart className='text-[14px]' />
                                        </Link>

                                        <div className='absolute top-[50%] left-[-12px] translate-y-[-50%] bg-[#C09578] rounded-full text-white font-bold px-[5px]'>
                                            {/* 0 */}
                                            {monstaWishlist.length}
                                        </div>
                                    </div>
                                    <div className='border border-[#ccc] p-2 hover:text-[#C09578] hover:border-[#C09578] duration-200 cursor-pointer relative'>
                                        <Link href={'/'} className=''>
                                            <IoMdCart className='text-[14px]' />
                                        </Link>

                                        <div className='absolute top-[50%] left-[-12px] translate-y-[-50%] bg-[#C09578] rounded-full text-white font-bold px-[5px]'>
                                            {monstaCart.length}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-[#ccc] p-2 hover:text-[#C09578] hover:border-[#C09578] duration-200 cursor-pointer relative'>
                                        <Link href={'/'} className=''>
                                            <FaBars className='text-[14px]' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='basis-[50%] lg:block hidden'>

                    <div className='flex justify-end items-center gap-[20px]'>
                        <div className='border border-[#ccc] flex justify-start items-center p-2'>
                            <div>
                                <input type="text" placeholder='Search Product...' className='text-[14px] w-[300px] outline-none px-2' />
                            </div>
                            <div>
                                <IoSearchOutline />
                            </div>
                        </div>
                        <div className='border border-[#ccc] p-2 hover:text-[#C09578] hover:border-[#C09578] duration-200 cursor-pointer relative'>
                            <Link href={'/'} className=''>
                                <FaHeart className='text-2xl' />
                            </Link>

                            <div className='absolute top-[50%] left-[-15px] translate-y-[-50%] bg-[#C09578] rounded-full text-white font-bold px-[5px]'>
                                {/* 0 */}
                                {monstaWishlist.length}
                            </div>
                        </div>
                        <Link href={'/cart'}>
                            <div className='border border-[#ccc] p-2 flex justify-center items-center hover:text-[#C09578] hover:border-[#C09578] duration-200 cursor-pointer relative'>
                                <div className='border-r-1 border-[#bdbdbd] pr-3 mr-3'>
                                    <IoMdCart className='text-[20px]' />
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='font-bold'>
                                        {/* Rs. 0.00 */}
                                        Rs. {ttlPrice.toFixed(2)}
                                    </span>
                                    <span>
                                        <IoIosArrowDown />
                                    </span>
                                </div>
                                <div className='absolute top-[50%] left-[-15px] translate-y-[-50%] bg-[#C09578] rounded-full text-white font-bold px-[5px]'>
                                    {/* 0 */}
                                    {monstaCart.length}
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <div className='w-full h-[0.5px] bg-[#cccccc80]'></div>

            <div className='lg:w-[1320px] mx-auto lg:block hidden'>

                <nav>
                    <ul className='flex justify-center items-center gap-10 font-semibold text-[14px] uppercase'>
                        <li className='py-5'>
                            <Link href={'/'} className='hover:text-[#C09578] duration-200'>
                                Home
                            </Link>
                        </li>
                        <li className='py-5'>
                            <div className='hover:text-[#C09578] duration-200 flex justify-center items-center gap-[5px] cursor-pointer'>
                                <span>
                                    Living
                                </span>
                                <span>
                                    <IoIosArrowDown />
                                </span>
                            </div>
                        </li>
                        <li className='py-5'>
                            <div className='hover:text-[#C09578] duration-200 flex justify-center items-center gap-[5px] cursor-pointer'>
                                <span>
                                    Sofa
                                </span>
                                <span>
                                    <IoIosArrowDown />
                                </span>
                            </div>
                        </li>
                        <li className="relative py-5 group">
                            <div className="hover:text-[#C09578] duration-200 flex justify-center items-center gap-[5px] cursor-pointer">
                                <span>Pages</span>
                                <span>
                                    <IoIosArrowDown />
                                </span>
                            </div>

                            <div
                                className="
                                    absolute top-full left-0 bg-white border border-[#cccccc80]
                                    min-w-[200px] p-[30px] pt-[25px]
                                    text-left z-[9]
                                    opacity-0 invisible
                                    transform perspective-[600px] rotate-x-[-90deg] origin-top
                                    transition-all duration-500
                                    group-hover:opacity-100 group-hover:visible group-hover:rotate-x-0
                                    "
                            >
                                <ul className="font-light text-[12px] text-[#949494] flex flex-col gap-[10px] normal-case">
                                    <li>
                                        <Link href="/" className="hover:text-[#C09578] duration-200">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="hover:text-[#C09578] duration-200">
                                            Cart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="hover:text-[#C09578] duration-200">
                                            Checkout
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="whitespace-nowrap hover:text-[#C09578] duration-200">
                                            Frequently Questions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        <li className='py-5'>
                            <Link href={'/'} className='hover:text-[#C09578] duration-200'>
                                Contact US
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className='w-full h-[0.5px] bg-[#cccccc80]'></div>

        </section>
    )
}