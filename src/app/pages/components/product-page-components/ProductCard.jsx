"use client"
import { addToCart, deleteFromCart } from '@/app/slice/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/app/slice/wishlistSlice';
import Link from 'next/link';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


export default function ProductCard({ prodt_dtls }) {

    // console.log(prodt_dtls);
    let { id, thumbnail, category, title, price } = prodt_dtls;

    // let price = prodt_dtls.price; // discounted price
    let dis = prodt_dtls.discountPercentage; // discount in %

    let original_price = price / (1 - dis / 100);
    original_price = original_price.toFixed(2); // optional: round to 2 decimal places

    // console.log("Original Price:", original_price);

    let monstaCart = useSelector((store) => store.monstaCartReducer.monstaCart);
    let monstaWishlist = useSelector((store) => store.monstaWishlistReducer.monstaWishlist);

    let dispatcher = useDispatch()

    let addToCartFunc = () => {
        let prodt_obj = {
            id,
            title,
            price,
            thumbnail,
            qty: 1,
        }
        // console.log(prodt_obj);
        dispatcher(addToCart(prodt_obj));
    }

    let addToWishlistFunc = () => {
        let prodt_obj = {
            id,
            title,
            price,
            thumbnail,
            qty: 1,
        }
        dispatcher(addToWishlist(prodt_obj));
    }


    let checkProdtOnCart = monstaCart.filter((item) => item.id == id);
    let checkProdtOnWishlist = monstaWishlist.filter((item) => item.id == id);


    return (
        <div className='border border-gray-300 shadow-[0px_0px_5px_3px_#ccc]'>
            <div className='border-b border-[#ccc]'>
                <Link href={`/product/${id}`}>
                    <img src={thumbnail} alt="Product Image" className='w-full' />
                </Link>
            </div>
            <div className='text-center'>
                <p className='text-[15px] text-[#707070] pb-1 pt-4'>
                    {category}
                </p>
                <Link href={`/product/${id}`} className='hover:text-[#C09578] duration-200 font-bold'>
                    <h1>
                        {title}
                    </h1>
                </Link>
                <div className="
                        mt-5 pt-5 relative flex justify-center items-center gap-[10px]
                        before:content-[''] before:block before:h-[1px] before:w-full 
                        before:absolute before:left-0 before:top-0
                        before:bg-linear-to-r before:from-[#ccc0] before:via-[#ccc] before:to-[#ccc0]
                    ">

                    <div className='line-through'>
                        Rs. {original_price}
                    </div>
                    <div className='font-bold text-[#C09578]'>
                        Rs. {price}
                    </div>

                </div>

                <div className='flex justify-center items-center gap-[10px] mb-5 mt-2'>

                    {
                        checkProdtOnWishlist.length == 1
                            ?
                            <button
                                className='bg-[#C09578] text-white duration-300 text-[20px] p-2 cursor-pointer rounded-md'
                                onClick={() => dispatcher(removeFromWishlist(id))}
                            >
                                <FaRegHeart />
                            </button>
                            :
                            <button className='bg-[#f2f2f2] hover:bg-[#C09578] hover:text-white duration-300 text-[20px] p-2 cursor-pointer rounded-md' onClick={addToWishlistFunc}>
                                <FaRegHeart />
                            </button>
                    }




                    {
                        checkProdtOnCart.length == 1
                            ?
                            <button
                                className='bg-[#C09578] text-white duration-300 text-[16px] p-2 cursor-pointer rounded-md px-[30px]'
                                onClick={() => dispatcher(deleteFromCart(id))}
                            >
                                Delete Item
                            </button>
                            :
                            <button className='bg-[#f2f2f2] hover:bg-[#C09578] hover:text-white duration-300 text-[16px] p-2 cursor-pointer rounded-md px-[30px]' onClick={addToCartFunc}>
                                Add to Cart
                            </button>
                    }
                </div>


            </div>
        </div>
    )
}