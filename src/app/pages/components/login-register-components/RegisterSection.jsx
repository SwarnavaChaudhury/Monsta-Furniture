"use client"
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function RegisterSection() {

    let [showPass, setShowPass] = useState(false);

    return (
        <div>

            <h1 className='text-2xl mb-5 uppercase'>
                Register
            </h1>

            <div className='border border-gray-200 p-7 rounded-md'>

                <label htmlFor="reg_user_fullname" className='block mb-2 font-bold'>
                    Name *
                </label>
                <input type="text" name="reg_user_fullname" id="reg_user_fullname" placeholder='Enter Name...' className='block border border-gray-200 w-full px-3 h-[40px] mb-5 outline-none text-[14px]' />

                <label htmlFor="reg_user_phno" className='block mb-2 font-bold'>
                    Phone Number *
                </label>
                <input type="number" name="reg_user_phno" id="reg_user_phno" placeholder='Enter Phone Number...' className='block border border-gray-200 w-full px-3 h-[40px] mb-5 outline-none text-[14px]' />

                <label htmlFor="reg_user_email" className='block mb-2 font-bold'>
                    Email *
                </label>
                <input type="email" name="reg_user_email" id="reg_user_email" placeholder='Enter Email Address...' className='block border border-gray-200 w-full px-3 h-[40px] mb-5 outline-none text-[14px]' />

                <label htmlFor="reg_user_pass" className='block mb-2 font-bold'>
                    Password *
                </label>
                <div className='relative'>
                    <input type={showPass ? 'text' : 'password'} name="reg_user_pass" id="reg_user_pass" placeholder='Enter Password...' className='block border border-gray-200 w-full pl-3 pr-10 h-[40px] mb-10 outline-none text-[14px]' />
                    <span className='absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-2xl' onClick={() => setShowPass(!showPass)}>
                        {
                            showPass
                                ?
                                <FaEyeSlash />
                                :
                                <FaEye />
                        }
                    </span>
                </div>

                <div className='flex justify-between items-center'>
                    <div></div>
                    <button type='submit' className='uppercase text-[14px] bg-[#C09578] font-bold text-white hover:bg-black duration-300 cursor-pointer px-[20px] py-[10px] rounded-[20px]'>
                        Register
                    </button>
                </div>

            </div>

        </div>
    )
}