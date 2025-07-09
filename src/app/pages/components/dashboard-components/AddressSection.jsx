import React from 'react'

export default function AddressSection() {
    return (
        <div>
            <p className='text-[#5a5a5a] mb-7'>
                The following addresses will be used on the checkout page by default.
            </p>

            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <h1 className='text-2xl mb-2'>
                        Billing address
                    </h1>
                    <div className='border border-gray-300 p-5'>

                        <div className='mb-5'>
                            <label htmlFor="billing_name" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing Name *
                            </label>
                            <input type="text" name="billing_name" id="billing_name" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing Name...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="billing_email" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing Email ID *
                            </label>
                            <input type="text" name="billing_email" id="billing_email" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing Email ID...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="billing_phno" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing Phone Number *
                            </label>
                            <input type="text" name="billing_phno" id="billing_phno" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing Phone Number...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="billing_addr" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing Address *
                            </label>
                            <input type="text" name="billing_addr" id="billing_addr" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing Address...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="billing_country" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing Country *
                            </label>
                            <input type="text" name="billing_country" id="billing_country" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing Country...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="billing_state" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing State *
                            </label>
                            <input type="text" name="billing_state" id="billing_state" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing State...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="billing_city" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Billing City *
                            </label>
                            <input type="text" name="billing_city" id="billing_city" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Billing City...' required />
                        </div>

                        <div className='flex justify-end items-center'>
                            <button className='text-[14px] font-bold uppercase text-white bg-[#C09578] hover:bg-black duration-300 px-[20px] py-[5px] rounded-2xl cursor-pointer'>
                                Update
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    <h1 className='text-2xl mb-2'>
                        Shipping Address
                    </h1>
                    <div className='border border-gray-300 p-5'>

                        <div className='mb-5'>
                            <label htmlFor="shipping_name" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping Name *
                            </label>
                            <input type="text" name="shipping_name" id="shipping_name" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping Name...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="shipping_email" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping Email ID *
                            </label>
                            <input type="email" name="shipping_email" id="shipping_email" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping Email ID...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="shipping_phno" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping Phone Number *
                            </label>
                            <input type="text" name="shipping_phno" id="shipping_phno" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping Phone Number...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="shipping_addr" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping Address *
                            </label>
                            <input type="text" name="shipping_addr" id="shipping_addr" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping Address...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="shipping_country" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping Country *
                            </label>
                            <input type="text" name="shipping_country" id="shipping_country" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping Country...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="shipping_state" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping State *
                            </label>
                            <input type="text" name="shipping_state" id="shipping_state" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping State...' required />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="shipping_city" className='block mb-2 hover:text-[#C09578] duration-300 cursor-pointer'>
                                Shipping City *
                            </label>
                            <input type="text" name="shipping_city" id="shipping_city" className='w-full border border-gray-300 h-[40px] px-3' placeholder='Enter Shipping City...' required />
                        </div>

                        <div className='flex justify-end items-center'>
                            <button className='text-[14px] font-bold uppercase text-white bg-[#C09578] hover:bg-black duration-300 px-[20px] py-[5px] rounded-2xl cursor-pointer'>
                                Update
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}