import React from 'react'

export default function CouponSection() {
    return (
        <div>
            <div className='bg-black text-white text-[16px] h-[50px] uppercase flex justify-start items-center pl-5 font-bold'>
                Coupon
            </div>
            <div className='p-5 border border-gray-200'>
                <p className='text-[rgb(90,90,90)]'>
                    Enter your coupon code if you have one.
                </p>
                <form className='mt-5 flex justify-start items-center gap-5'>
                    <input type="text" name="" id="" className='h-[45px] w-[300px] px-2 text-gray-400 border outline-none' placeholder='Coupon code...' />
                    <button className='uppercase h-[45px] px-5 bg-black text-white hover:bg-[#C09578] duration-300 text-[14px] font-bold cursor-pointer'>
                        Apply Coupon
                    </button>
                </form>
            </div>
        </div>
    )
}