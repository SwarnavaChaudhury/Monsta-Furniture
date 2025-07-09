import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import WishlistTable from '../pages/components/wishlist-page-components/WishlistTable'

export default function wishlist() {
    return (
        <section>

            <PageTitle pg_title={'My Wishlist'} />


            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <WishlistTable />

            </div>


        </section>
    )
}