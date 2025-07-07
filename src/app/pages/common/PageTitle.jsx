import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function PageTitle({ pg_title }) {
    return (
        <section>

            <div className='lg:w-[1320px] w-full mx-auto flex justify-center items-center border-b border-[#cccccc80] py-8 mb-5'>

                <div>
                    <h1 className='text-4xl font-semibold mb-2'>
                        {/* Online Store */}
                        {pg_title}
                    </h1>
                    <div className='flex justify-center items-center text-[14px]'>
                        <Link href={'/'} className='hover:text-[#C09578] duration-200'>
                            <span>
                                Home
                            </span>
                        </Link>
                        <MdOutlineKeyboardArrowRight />
                        <span className='text-[#C09578]'>
                            {/* Online Store */}
                            {pg_title}
                        </span>
                    </div>
                </div>

            </div>

        </section>
    )
}