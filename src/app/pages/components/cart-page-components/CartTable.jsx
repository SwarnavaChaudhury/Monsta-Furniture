"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import CartTableRow from './CartTableRow';

export default function CartTable() {


    const monstaCart = useSelector((store) => {
        // console.log(store);
        // console.log(store.monstaCartReducer.monstaCart);
        return store.monstaCartReducer.monstaCart;
    });

    const ttlPrice = monstaCart.reduce((acc, currVal) => {
        const quantity = currVal.qty || 1;
        return acc + (currVal.price * quantity);
    }, 0);





    return (
        <table className='w-full'>
            <thead className='h-[50px] border-b-[4px] border-[#C09578] bg-[#F2F2F2]'>
                <tr className='text-[16px]'>
                    <th> Sl/No. </th>
                    <th> Image </th>
                    <th> Product </th>
                    <th> Price </th>
                    <th> Quantity </th>
                    <th> Total </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {
                    monstaCart.map((item, index) => {
                        return (
                            <CartTableRow rowval={item} rowno={index} key={index} />
                        )
                    })
                }
                <tr className='h-[70px] w-full border border-gray-200'>
                    <td colSpan={7} align='right'>
                        <span className='font-bold pr-10 text-gray-500 text-[25px]'>
                            Total : Rs. {ttlPrice.toFixed(2)}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}