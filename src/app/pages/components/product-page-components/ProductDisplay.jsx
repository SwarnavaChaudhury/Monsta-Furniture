import React from 'react'
import ProductCard from './ProductCard';

export default function ProductDisplay({ prodtdta }) {

    // console.log(prodtdta);

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-[25px]'>

            {
                prodtdta.map((item, index) => {
                    return (
                        <ProductCard prodt_dtls={item} key={index} />
                    )
                })
            }

        </div>
    )
}