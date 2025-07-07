import Link from 'next/link'
import React from 'react'

export default function NewTrendingCollection() {
    return (
        <>

            <div className="h-[510px] w-full bg-[url(/imgs/new-trending-collection.jpg)] bg-no-repeat bg-cover">
                <div className='lg:w-[1320px] w-full h-full mx-auto lg:px-0 px-5 flex justify-start items-center'>
                    <div>
                        <h1 className='text-[50px] font-bold'>
                            New Trending Collection
                        </h1>
                        <p>
                            We Believe That Good Design is Always in Season
                        </p>
                        <div className='mt-15'>
                            <Link href={'/products'} className='border-2 border-[#C09578] text-[#C09578] hover:bg-[#C09578] hover:text-white duration-300 lg:px-10 px-5 lg:py-4 py-2'>
                                Shopping Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}