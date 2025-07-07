"use client"
import Link from 'next/link'
import React from 'react'

export default function ProductCateCard() {

    let prodtCateDtls = [
        {
            cateHdr: 'Top Rated Products',
            cateSubHdr: 'Chair Collection',
            cateImg: 'cate-img-1.webp',
            cateUrl: '/products/top-rated'
        },
        {
            cateHdr: 'Best Selling Products',
            cateSubHdr: 'Chair Collection',
            cateImg: 'cate-img-2.webp',
            cateUrl: '/products/best-selling'
        },
        {
            cateHdr: 'On Sale Products',
            cateSubHdr: 'Chair Collection',
            cateImg: 'cate-img-3.webp',
            cateUrl: '/products/on-sale'
        },
    ]

    return (
        <section>
            <div className='my-8 lg:w-[1320px] w-full mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-3'>

                {
                    prodtCateDtls.map((item, index) => {
                        return (
                            <Link href={item.cateUrl} key={index} className='lg:px-0 px-5'>
                                <div className="w-full relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.20)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                    <img
                                        src={`/imgs/cate-hdr/${item.cateImg}`}
                                        alt=""
                                        className="w-full transition-transform duration-300 group-hover:scale-110"
                                    />

                                    <div className="absolute top-[30px] left-[30px] z-20 text-black">
                                        <h5 className="font-light text-[16px]">{item.cateHdr}</h5>
                                        <h1 className="font-semibold text-[25px]">{item.cateSubHdr}</h1>
                                    </div>
                                </div>

                            </Link>
                        )
                    })
                }

            </div>
        </section>
    )
}