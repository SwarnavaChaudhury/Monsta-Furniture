"use client"
import React from 'react'
import Testimonial from './Testimonial'

export default function HomeTestimonial() {

    let testi_dta = [
        {
            username: 'Kathy Young',
            userimg: '/imgs/testimonial/testi-1.jpg',
            designation: 'CEO of SunPark',
            comment: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!',
            rating: 5,
            date: ''
        },
        {
            username: 'Jun Chaola',
            userimg: '/imgs/testimonial/testi-2.jpg',
            designation: 'CMO of Tesla',
            comment: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!',
            rating: 3,
            date: ''
        },
        {
            username: 'Kelvin Frank',
            userimg: '/imgs/testimonial/testi-3.png',
            designation: 'CFO of Microsoft',
            comment: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!',
            rating: 4,
            date: ''
        }
    ]

    return (
        <div className='my-8 lg:w-[1320px] w-full mx-auto'>

            <h1 className='text-[22px] font-bold text-center'>
                What Our Custumers Say ?
            </h1>

            <div className='mt-6'>
                <Testimonial testi_dta={testi_dta} />
            </div>

        </div>
    )
}