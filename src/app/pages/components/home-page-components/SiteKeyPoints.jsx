import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";




export default function SiteKeyPoints() {
    return (
        <section className='bg-[#F8F9F9] py-5'>
            <div className='my-8 lg:w-[1320px] w-full mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-10'>

                <div className='flex flex-col justify-center items-center group'>
                    <div className='border-2 border-black rounded-full group-hover:text-[#C09578] group-hover:border-[#C09578] duration-200'>
                        <FaEarthAmericas className='m-[30px] text-[20px]' />
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-2xl'>
                            Free Shipping
                        </h1>
                        <p className='mt-2 text-[#7c7c7c]'>
                            Free shipping on all order
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center group'>
                    <div className='border-2 border-black rounded-full group-hover:text-[#C09578] group-hover:border-[#C09578] duration-200'>
                        <IoMdCheckmarkCircleOutline className='m-[30px] text-[20px]' />
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-2xl'>
                            Money Return
                        </h1>
                        <p className='mt-2 text-[#7c7c7c]'>
                            Back guarantee under 7 days
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center group'>
                    <div className='border-2 border-black rounded-full group-hover:text-[#C09578] group-hover:border-[#C09578] duration-200'>
                        <LuClock3 className='m-[30px] text-[20px]' />
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-2xl'>
                            Online Support
                        </h1>
                        <p className='mt-2 text-[#7c7c7c]'>
                            Support online 24 hours a day
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
