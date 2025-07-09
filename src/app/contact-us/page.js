import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import { FaFax } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from '../pages/components/contact-us-components/ContactForm';

export const metadata = {
    title: "Contact Us - Monsta E-Commerce",
    description: "Contact Us Page!",
};


export default function ContactUs() {
    return (
        <section>

            <PageTitle pg_title={'Contact Us'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <div className='w-full mt-10 mb-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7155.251016816475!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1751964790929!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div>

                        <div className='border-b border-gray-300 w-full mb-5 pb-5'>
                            <h1 className='text-2xl font-bold'>
                                Contact Us
                            </h1>
                        </div>
                        <div className='border-b border-gray-300 w-full mb-5 pb-5 text-[14px] flex justify-start items-center gap-[10px]'>
                            <span>
                                <FaFax />
                            </span>
                            <span>
                                Address : Claritas est etiam processus dynamicus
                            </span>
                        </div>
                        <div className='border-b border-gray-300 w-full mb-5 pb-5 text-[14px] flex justify-start items-center gap-[10px]'>
                            <span>
                                <IoIosCall />
                            </span>
                            <span>
                                98745612330
                            </span>
                        </div>
                        <div className='border-b border-gray-300 w-full mb-5 pb-5 text-[14px] flex justify-start items-center gap-[10px]'>
                            <span>
                                <MdOutlineEmail />
                            </span>
                            <span>
                                furnitureinfo@gmail.com
                            </span>
                        </div>

                    </div>
                    <div className='p-5'>

                        <div className='w-full mb-10'>
                            <h1 className='text-2xl font-bold'>
                                Tell us your question
                            </h1>
                        </div>

                        <div className='w-full'>
                            <ContactForm />
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}