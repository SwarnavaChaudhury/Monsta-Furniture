import React from 'react'
import Link from 'next/link'

export default function CategoryDisplay({ catedta, selectedCategory }) {
    return (
        <div className='pl-5'>
            {
                catedta.map((item, index) => {
                    return (
                        <div key={index} className='mb-1'>
                            <Link href={`?category=${item.slug}&page=1`}>
                                <label
                                    className={`cursor-pointer capitalize hover:text-blue-600 duration-200 ${selectedCategory === item.slug ? 'font-bold text-blue-600' : ''}`}>
                                    {item.name}
                                </label>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
