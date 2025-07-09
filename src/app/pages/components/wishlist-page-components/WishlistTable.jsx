"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import WishlistTableRow from './WishlistTableRow';

export default function WishlistTable() {

    const monstaWishlist = useSelector((store) => {
        // console.log(store);
        // console.log(store.monstaWishlistReducer.monstaWishlist);
        return store.monstaWishlistReducer.monstaWishlist;
    });

    return (
        <table className='w-full'>
            <thead className='h-[50px] border-b-[4px] border-[#C09578] bg-[#F2F2F2]'>
                <tr className='text-[16px]'>
                    <th> Sl/No. </th>
                    <th> Image </th>
                    <th> Product </th>
                    <th> Price </th>
                    <th> Add To Cart </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>

                {
                    monstaWishlist.map((item, index) => {
                        return (
                            <WishlistTableRow rowval={item} rowno={index} key={index} />
                        )
                    })
                }

            </tbody>
        </table>
    )
}