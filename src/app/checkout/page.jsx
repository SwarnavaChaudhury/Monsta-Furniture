import React from 'react'
import PageTitle from '../pages/common/PageTitle';
import CheckoutBillingDetails from '../pages/components/checkout-page-components/CheckoutBillingDetails';
import CheckoutOrderDetails from '../pages/components/checkout-page-components/CheckoutOrderDetails';


export const metadata = {
    title: "Checkout Page - Monsta E-Commerce",
    description: "Checkout Page!",
};


export default function Checkout() {
    return (
        <section>

            <PageTitle pg_title={'Checkout'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10 grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div>
                    <CheckoutBillingDetails />
                </div>
                <div>
                    <CheckoutOrderDetails />
                </div>
            </div>

        </section>
    )
}
