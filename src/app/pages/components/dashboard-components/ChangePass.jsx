import React from 'react'

export default function ChangePass() {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-3'>
                Change Password
            </h1>

            <div className='p-5 border border-gray-300'>

                <div className='mb-5'>
                    <label htmlFor="curr_pass" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        Current Password *
                    </label>
                    <input type="password" name="curr_pass" id="curr_pass" placeholder='Enter Current Password...' className='h-[40px] border border-gray-300 w-full px-3 outline-none' />
                </div>
                <div className='mb-5'>
                    <label htmlFor="new_pass" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        New Password *
                    </label>
                    <input type="password" name="new_pass" id="new_pass" placeholder='Enter New Password...' className='h-[40px] border border-gray-300 w-full px-3 outline-none' />
                </div>
                <div className='mb-5'>
                    <label htmlFor="conf_new_pass" className='block mb-1 cursor-pointer hover:text-[#C09578] duration-300'>
                        Confirm Password *
                    </label>
                    <input type="password" name="conf_new_pass" id="conf_new_pass" placeholder='Enter Confirm Password...' className='h-[40px] border border-gray-300 w-full px-3 outline-none' />
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