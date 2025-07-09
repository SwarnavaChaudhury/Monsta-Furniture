import Link from 'next/link'
import React from 'react'

export default function OrderSection() {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-3'>
                Orders
            </h1>

            <table className='w-full'>
                <thead className='text-[15px] text-center bg-[#F2F2F2] h-[40px] border-b-2'>
                    <tr>
                        <td> Order </td>
                        <td> Date </td>
                        <td> Status </td>
                        <td> Total </td>
                        <td> Actions </td>
                    </tr>
                </thead>
                <tbody className='text-[14px] font-bold text-center'>
                    <tr className='h-[40px] border-b border-gray-300'>
                        <td>1.</td>
                        <td>May 10, 2018</td>
                        <td>Completed</td>
                        <td>Rs. 25.00 for 1 item</td>
                        <td>
                            <Link href={'/order-details'} className='text-[#C09578]'>
                                View
                            </Link>
                        </td>
                    </tr>
                    <tr className='h-[40px] border-b border-gray-300'>
                        <td>2.</td>
                        <td>May 10, 2018</td>
                        <td>Completed</td>
                        <td>Rs. 25.00 for 1 item</td>
                        <td>
                            <Link href={'/order-details'} className='text-[#C09578]'>
                                View
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}