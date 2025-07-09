"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CheckoutBillingDetails() {

    let [countryList, setCountryList] = useState([]);
    let [diffAddr, setDiffAddr] = useState(false);

    let FetchAllCountries = () => {
        axios.get(`https://countriesnow.space/api/v0.1/countries`)
            .then((res) => {
                // console.log(res.data.data);
                setCountryList(res.data.data)
            })
            .catch((res_err) => {
                console.log(res_err);
            })
    }

    useEffect(() => {
        FetchAllCountries();
    }, [])

    return (
        <div>
            <div className='h-[40px] flex justify-start items-center pl-5 bg-black text-white text-[20px] mb-5'>
                Billing Details
            </div>
            <div className='grid grid-cols-2 gap-5 mb-5'>
                <div>
                    <label htmlFor="name" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Name *
                    </label>
                    <input type="text" name="name" id="name" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
                <div>
                    <label htmlFor="mob_no" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Mobile Number *
                    </label>
                    <input type="number" name="mob_no" id="mob_no" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5 mb-5'>
                <div>
                    <label htmlFor="billing_name" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Billing Name *
                    </label>
                    <input type="text" name="billing_name" id="billing_name" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
                <div>
                    <label htmlFor="billing_email" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Billing Email *
                    </label>
                    <input type="text" name="billing_email" id="billing_email" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
            </div>
            <div className='mb-5'>
                <label htmlFor="billing_mob_no" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                    Billing Mobile Number *
                </label>
                <input type="text" name="billing_mob_no" id="billing_mob_no" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
            </div>
            <div className='mb-5'>
                <label htmlFor="billing_addr" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                    Billing Address *
                </label>
                <input type="text" name="billing_addr" id="billing_addr" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
            </div>
            <div className='mb-5'>
                <label htmlFor="billing_country" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                    Country *
                </label>
                <select name="billing_country" id="billing_country" className='h-[40px] border border-gray-300 w-full outline-none px-3' required>
                    <option value=""> Select Country </option>
                    {
                        countryList.map((item, index) => {
                            return (
                                <option value={item.country} key={index}>
                                    {item.country}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='grid grid-cols-2 gap-5 mb-5'>
                <div>
                    <label htmlFor="state" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        State *
                    </label>
                    <input type="text" name="state" id="state" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
                <div>
                    <label htmlFor="city" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        City *
                    </label>
                    <input type="number" name="city" id="city" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
            </div>
            <div className='mb-5'>
                <input type="checkbox" name="diff_addr" id="diff_addr" onChange={() => setDiffAddr(!diffAddr)} />
                <label htmlFor="diff_addr" className='cursor-pointer bg-black text-white p-2 rounded-md ml-2'>
                    Ship To A Different Address
                </label>
            </div>
            {/* <div className={`mb-5 ${diffAddr ? 'block' : 'hidden'} `}> */}
            <div className={`transition-all duration-500 overflow-hidden ${diffAddr ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
                <div className='grid grid-cols-2 gap-5 mb-5'>
                    <div>
                        <label htmlFor="shipping_name" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                            Shipping Name *
                        </label>
                        <input type="text" name="shipping_name" id="shipping_name" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                    </div>
                    <div>
                        <label htmlFor="shipping_email" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                            Shipping Email *
                        </label>
                        <input type="number" name="shipping_email" id="shipping_email" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="shipping_mob_no" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Shipping Mobile Number *
                    </label>
                    <input type="text" name="shipping_mob_no" id="shipping_mob_no" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
                <div className='mb-5'>
                    <label htmlFor="shipping_addr" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Shipping Address *
                    </label>
                    <input type="text" name="shipping_addr" id="shipping_addr" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                </div>
                <div className='mb-5'>
                    <label htmlFor="shipping_country" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                        Country *
                    </label>
                    <select name="shipping_country" id="shipping_country" className='h-[40px] border border-gray-300 w-full outline-none px-3' required>
                        <option value=""> Select Country </option>
                        {
                            countryList.map((item, index) => {
                                return (
                                    <option value={item.country} key={index}>
                                        {item.country}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='grid grid-cols-2 gap-5 mb-5'>
                    <div>
                        <label htmlFor="shipping_state" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                            State *
                        </label>
                        <input type="text" name="shipping_state" id="shipping_state" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                    </div>
                    <div>
                        <label htmlFor="shipping_city" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                            City *
                        </label>
                        <input type="number" name="shipping_city" id="shipping_city" className='h-[40px] border border-gray-300 w-full outline-none px-3' required />
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <label htmlFor="order_notes" className='text-[14px] font-bold block mb-1 cursor-pointer hover:text-[#c09578] duration-300'>
                    Order Notes
                </label>
                <textarea name="order_notes" id="order_notes" className='h-[200px] border border-gray-300 w-full outline-none px-3 resize-none text-[14px] py-1' placeholder='Notes about your order, e.g., special notes for delivery.'></textarea>
            </div>
        </div>
    )
}