import { deleteFromCart, updateCartDecrement, updateCartIncrement } from '@/app/slice/cartSlice';
import Link from 'next/link';
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';




export default function CartTableRow({ rowval, rowno }) {

    let dispatcher = useDispatch();

    // console.log(rowval);
    let { id, title, price, thumbnail, qty } = rowval;

    let handleRemoveProdt = () => {
        if (confirm("Confirm remove this product?")) {
            dispatcher(deleteFromCart(id));
        }
    }

    let handleIncrese = () => {
        if (qty < 10) {
            dispatcher(updateCartIncrement(id));
        } else {
            toast.warn('Maximum quantity already added!');
        }
    }

    let handleDecrese = () => {
        if (qty > 1) {
            dispatcher(updateCartDecrement(id));
        }
    }

    return (
        <tr className='min-h-[50px] w-full border border-gray-200 text-center'>
            <td>{rowno + 1}.</td>
            <td className='flex justify-center items-center'>
                <Link href={`/product/${id}`}>
                    <img src={thumbnail} alt="" className='w-[100px]' />
                </Link>
            </td>
            <td>
                <Link href={`/product/${id}`}>
                    {title}
                </Link>
            </td>
            <td>
                <span className='font-bold'>
                    Rs. {price}
                </span>
            </td>
            <td className=''>
                <p className='flex justify-center items-center gap-5'>
                    <button className='cursor-pointer' onClick={handleIncrese}>
                        <FaPlus />
                    </button>
                    <span className='border h-[40px] w-[40px] flex justify-center items-center text-2xl rounded-md'>
                        {qty}
                    </span>
                    <button className='cursor-pointer' onClick={handleDecrese}>
                        <FaMinus />
                    </button>
                </p>
            </td>
            <td>
                <span className='font-bold total_value'>
                    Rs. {(price * qty).toFixed(2)}
                </span>
            </td>
            <td>
                <button className='text-3xl cursor-pointer text-[#C09578] hover:text-red-500 duration-200' onClick={handleRemoveProdt}>
                    <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    )
}