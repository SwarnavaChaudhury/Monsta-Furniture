import { LoginContext } from '@/app/MainLayout';
import React, { useContext } from 'react'

export default function MyProfile() {

    const { UserID, setUserID, UserToken, setUserToken } = useContext(LoginContext);
    let user_email = UserID.email;
    // console.log(user_email);

    return (
        <div>
            <h1 className='text-2xl font-bold mb-3'>
                My Profile
            </h1>

            <div className='p-5 border border-gray-300'>

                <div className='flex justify-start items-center gap-7 mb-5'>
                    <div className='flex justify-start items-center gap-2'>
                        <input type="radio" name="gender" id="mr" />
                        <label htmlFor="mr" className='cursor-pointer hover:text-[#C09578] duration-300'>
                            Mr.
                        </label>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <input type="radio" name="gender" id="mrs" />
                        <label htmlFor="mrs" className='cursor-pointer hover:text-[#C09578] duration-300'>
                            Mrs.
                        </label>
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="user_name" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        Name *
                    </label>
                    <input type="text" name="user_name" id="user_name" placeholder='Enter Name...' className='h-[40px] border border-gray-300 w-full px-3 outline-none' />
                </div>
                <div className='mb-5'>
                    <label htmlFor="user_email" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        Email ID *
                    </label>
                    <input type="text" value={user_email} name="user_email" id="user_email" placeholder='Enter Email...' className='h-[40px] border border-gray-300 w-full px-3 outline-none bg-gray-300' required readOnly />
                </div>
                <div className='mb-5'>
                    <label htmlFor="user_phno" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        Mobile Number *
                    </label>
                    <input type="text" name="user_phno" id="user_phno" placeholder='Mobile Number...' className='h-[40px] border border-gray-300 w-full px-3 outline-none' />
                </div>
                <div className='mb-5'>
                    <label htmlFor="user_address" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        Address *
                    </label>
                    <input type="text" name="user_address" id="user_address" placeholder='Enter Email...' className='h-[40px] border border-gray-300 w-full px-3 outline-none' />
                </div>

                <div className='flex justify-end items-center'>
                    <button className='text-[14px] font-bold uppercase text-white bg-[#C09578] hover:bg-black duration-300 px-[20px] py-[5px] rounded-2xl cursor-pointer'>
                        Update
                    </button>
                </div>

            </div>

        </div>
    )
}