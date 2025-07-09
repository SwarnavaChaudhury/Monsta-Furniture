import React from 'react'

export default function CheckoutOrderDetails() {
    return (
        <div>
            <div className='h-[40px] flex justify-start items-center pl-5 bg-black text-white text-[20px] mb-5'>
                Order Details
            </div>
            <table className='w-full text-center font-bold'>
                <thead className='bg-[#F2F2F2] h-[55px]'>
                    <tr>
                        <td>
                            Product
                        </td>
                        <td>
                            Total
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-gray-300'>
                        <td className='py-[10px] border-r border-gray-300'>
                            Caroline Study Tables × 6
                        </td>
                        <td className='py-[10px]'>
                            Rs. 15,000
                        </td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <td className='py-[10px] border-r border-gray-300'>
                            Hrithvik Stool × 3
                        </td>
                        <td className='py-[10px]'>
                            Rs. 18,000
                        </td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <td className='py-[10px]'>
                            Cart Subtotal
                        </td>
                        <td className='py-[10px]'>
                            Rs. 33,000
                        </td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <td className='py-[10px]'>
                            Discount (-)
                        </td>
                        <td className='py-[10px]'>
                            Rs. 0
                        </td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <td className='py-[10px]'>
                            Order Total
                        </td>
                        <td className='py-[10px]'>
                            Rs. 33,000
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='flex justify-end items-center mt-10'>
                <button className='px-5 py-2 rounded-md font-bold bg-[#c09578] hover:bg-black text-white duration-300 cursor-pointer'>
                    Place Order
                </button>
            </div>

        </div>
    )
}