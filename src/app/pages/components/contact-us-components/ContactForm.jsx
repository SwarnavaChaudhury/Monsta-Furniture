import React from 'react'

export default function ContactForm() {
    return (

        <form>
            <div className='mb-5'>
                <label htmlFor="user_name" className='block text-[14px] font-bold mb-2'>
                    Your Name (required)
                </label>
                <input type="text" name="user_name" id="user_name" placeholder='Name *' className='h-[40px] w-full border border-gray-300 outline-none px-2' required />
            </div>
            <div className='mb-5'>
                <label htmlFor="user_email" className='block text-[14px] font-bold mb-2'>
                    Your Email (required)
                </label>
                <input type="text" name="user_email" id="user_email" placeholder='Email *' className='h-[40px] w-full border border-gray-300 outline-none px-2' required />
            </div>
            <div className='mb-5'>
                <label htmlFor="user_phno" className='block text-[14px] font-bold mb-2'>
                    Your Mobile Number (required)
                </label>
                <input type="text" name="user_phno" id="user_phno" placeholder='Mobile Number *' className='h-[40px] w-full border border-gray-300 outline-none px-2' required />
            </div>
            <div className='mb-5'>
                <label htmlFor="subj" className='block text-[14px] font-bold mb-2'>
                    Subject (required)
                </label>
                <input type="text" name="subj" id="subj" placeholder='Subject *' className='h-[40px] w-full border border-gray-300 outline-none px-2' required />
            </div>
            <div className='mb-5'>
                <label htmlFor="msg" className='block text-[14px] font-bold mb-2'>
                    Your Message (required)
                </label>
                <input type="text" name="msg" id="msg" placeholder='Message *' className='h-[40px] w-full border border-gray-300 outline-none px-2' required />
            </div>

            <button className='w-[100px] h-[40px] bg-black text-white hover:bg-[#C09578] duration-300 cursor-pointer font-bold rounded-md'>
                Send
            </button>

        </form>

    )
}