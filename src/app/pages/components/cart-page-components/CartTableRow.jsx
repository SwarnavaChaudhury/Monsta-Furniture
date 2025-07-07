import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";




export default function CartTableRow({ rowval, rowno }) {

    console.log(rowval);
    let { id, title, price, thumbnail, qty } = rowval;

    return (
        <tr className='min-h-[50px] w-full border border-gray-200 text-center'>
            <td>{rowno + 1}.</td>
            <td className='flex justify-center items-center'>
                <img src={thumbnail} alt="" className='w-[100px]' />
            </td>
            <td>
                {title}
            </td>
            <td>
                <span className='font-bold'>
                    Rs. {price}
                </span>
            </td>
            <td className=''>
                <p className='flex justify-center items-center gap-5'>
                    <span className='cursor-pointer'>
                        <FaPlus />
                    </span>
                    <span className='border h-[50px] w-[50px] flex justify-center items-center text-2xl rounded-md'>
                        {qty}
                    </span>
                    <span className='cursor-pointer'>
                        <FaMinus />
                    </span>
                </p>
            </td>
            <td>
                <span className='font-bold'>
                    Rs. {(price * qty).toFixed(2)}
                </span>
            </td>
            <td>
                <button className='text-3xl cursor-pointer text-[#C09578] hover:text-red-500 duration-200'>
                    <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    )
}