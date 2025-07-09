import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import Link from 'next/link';

export default function page() {

    let order_details = [
        {
            product_id: '55',
            product_img: 'https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp',
            product_title: 'Egg Slicer',
            product_price: '45',
            product_qty: '1',
            product_color: 'Yellow',
        },
        {
            product_id: '6',
            product_img: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp',
            product_title: 'Calvin Klein CK One',
            product_price: '150',
            product_qty: '5',
            product_color: 'White',
        },
        {
            product_id: '2',
            product_img: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
            product_title: 'Eyeshadow Palette with Mirror',
            product_price: '190',
            product_qty: '2',
            product_color: 'Red',
        },
        {
            product_id: '52',
            product_img: 'https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp',
            product_title: 'Carbon Steel Wok',
            product_price: '350',
            product_qty: '1',
            product_color: 'Steel',
        },
    ];

    return (
        <section>

            <PageTitle pg_title={'Order Details'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10 grid lg:grid-cols-[60%_auto] grid-cols-1 gap-8'>

                <div className='border border-gray-300 p-5'>

                    {
                        order_details.map((item, index) => {
                            return (
                                <div className='flex justify-start items-center gap-6 mb-5' key={index}>
                                    <div>
                                        <Link href={`/product/${item.product_id}`}>
                                            <img src={item.product_img} alt="" className='h-[150px] border-2 border-gray-300 rounded-md' />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={`/product/${item.product_id}`} className='text-2xl text-[#6b7280] mb-3'>
                                            {item.product_title}
                                        </Link>
                                        <ul className='text-[14px]'>
                                            <li className='mb-2'>
                                                <b> Price: </b>
                                                ₹ {item.product_price}
                                            </li>
                                            <li className='mb-2'>
                                                <b> Quantity: </b>
                                                {item.product_qty}
                                            </li>
                                            <li className='mb-2'>
                                                <b> Color: </b>
                                                {item.product_color}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='border border-gray-300 p-5'>

                    <h1 className='text-2xl mb-1 text-[#6b7280]'>
                        Address
                    </h1>
                    <p className='text-[14px] mb-5'>
                        Roshan Chaurasia, First Floor , Laxmi Tower, Bhaskar Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003 India
                    </p>

                    <h1 className='text-2xl mb-1 text-[rgb(107,114,128)]'>
                        Order Summary
                    </h1>
                    <ul className='text-[14px]'>
                        <li className='mb-1'>
                            <b>
                                Item(s) Subtotal :
                            </b>
                            ₹ 3500
                        </li>
                        <li className='mb-1'>
                            <b>
                                Cash / Pay on Delivery :
                            </b>
                            ₹ 0
                        </li>
                        <li className='mb-1'>
                            <b>
                                Shipping :
                            </b>
                            ₹ 0
                        </li>
                        <li className='mb-1'>
                            <b>
                                Grand Total:
                            </b>
                            ₹ 3500
                        </li>
                    </ul>

                    <Link href={'/dashboard'}>
                        <p className='h-[40px] bg-[#C09578] text-white w-full cursor-pointer mt-5 rounded-md flex justify-center items-center font-bold text-[20px]'>
                            Return Dashboard
                        </p>
                    </Link>

                </div>

            </div>

        </section>
    )
}