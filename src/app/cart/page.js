import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import CartTable from '../pages/components/cart-page-components/CartTable'



export default function cart() {
    return (
        <section>

            <PageTitle pg_title={'Shopping Cart'} />



            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <CartTable />

            </div>



        </section>
    )
}