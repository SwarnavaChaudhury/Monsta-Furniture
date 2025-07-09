"use client"
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CartTotal() {


    const monstaCart = useSelector((store) => {
        // console.log(store);
        // console.log(store.monstaCartReducer.monstaCart);
        return store.monstaCartReducer.monstaCart;
    });

    const ttlPrice = monstaCart.reduce((acc, currVal) => {
        const quantity = currVal.qty || 1;
        return acc + (currVal.price * quantity);
    }, 0);

    let discount = 0;


    return (
        <div>
            <div className='bg-black text-white text-[16px] h-[50px] uppercase flex justify-start items-center pl-5 font-bold'>
                Cart Totals
            </div>
            <div className='p-5 border border-gray-200'>
                <div className='w-full px-5'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='text-[14px] font-bold'>
                            Subtotal
                        </div>
                        <div className='text-[16px] font-bold'>
                            Rs. {ttlPrice.toFixed(2)}
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='text-[14px] font-bold'>
                            Discount (-)
                        </div>
                        <div className='text-[16px] font-bold'>
                            Rs. {discount.toFixed(2) || 0}
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='text-[14px] font-bold'>
                            Total
                        </div>
                        <div className='text-[16px] font-bold'>
                            Rs. {(ttlPrice - discount).toFixed(2)}
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        <Link href={'/checkout'} className='h-[45px] px-5 bg-[#C09578] text-white hover:bg-black duration-300 cursor-pointer font-bold flex justify-center items-center'>
                            Proceed To Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}