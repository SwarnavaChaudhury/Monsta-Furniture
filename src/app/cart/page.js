import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import CartTable from '../pages/components/cart-page-components/CartTable'
import CouponSection from '../pages/components/cart-page-components/CouponSection'
import CartTotal from '../pages/components/cart-page-components/CartTotal'


export const metadata = {
    title: "Cart - Monsta E-Commerce",
    description: "Cart Page!",
};


export default function cart() {
    return (
        <section>

            <PageTitle pg_title={'Shopping Cart'} />



            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <CartTable />

            </div>


            <div className='lg:w-[1320px] w-full mx-auto mb-10 grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div>
                    <CouponSection />
                </div>
                <div>
                    <CartTotal />
                </div>
            </div>


        </section>
    )
}