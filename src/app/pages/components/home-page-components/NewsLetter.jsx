import React from 'react'

export default function NewsLetter() {
    return (
        <section className='bg-[#F8F9F9] py-10 lg:px-0 px-5'>
            <div className='my-8 lg:w-[1320px] w-full mx-auto'>

                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>
                        Our Newsletter
                    </h1>
                    <p className='text-[16px] text-[#5a5a5a] mt-2'>
                        Get E-mail updates about our latest shop and special offers.
                    </p>
                </div>

                <div className='w-full flex justify-center items-center mt-8'>

                    <form className='w-[700px] flex justify-center items-center'>
                        <input type="text" name="" id="" className='text-[16px] w-full px-2 h-[45px] outline-none border border-[#ccc]' placeholder='Enter Your Email...' />
                        <button className='bg-[#C09578] text-white font-bold hover:bg-[#232323] duration-300 w-[200px] h-[45px] cursor-pointer'>
                            Subscribe
                        </button>
                    </form>

                </div>

            </div>
        </section>
    )
}