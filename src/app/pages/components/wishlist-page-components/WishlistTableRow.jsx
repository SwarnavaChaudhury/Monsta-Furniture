import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBinLine } from "react-icons/ri";
import { addToCart, deleteFromCart } from '@/app/slice/cartSlice';
import { removeFromWishlist } from '@/app/slice/wishlistSlice';




export default function WishlistTableRow({ rowval, rowno }) {

    let dispatcher = useDispatch();

    let { id, title, price, thumbnail, qty } = rowval;

    let monstaCart = useSelector((store) => store.monstaCartReducer.monstaCart);
    let checkProdtOnCart = monstaCart.filter((item) => item.id == id);

    let addToCartFunc = () => {
        let prodt_obj = {
            id,
            title,
            price,
            thumbnail,
            qty: 1,
        }
        // console.log(prodt_obj);
        dispatcher(addToCart(prodt_obj));
    }

    let handleRemoveProdt = () => {
        if (confirm("Confirm remove item from wishlist?")) {
            dispatcher(removeFromWishlist(id))
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
            <td>
                {
                    checkProdtOnCart.length == 1
                        ?
                        <button
                            className='bg-[#C09578] text-white duration-300 text-[16px] p-2 cursor-pointer rounded-md px-[30px]'
                            onClick={() => dispatcher(deleteFromCart(id))}
                        >
                            Delete Item
                        </button>
                        :
                        <button className='bg-[#f2f2f2] hover:bg-[#C09578] hover:text-white duration-300 text-[16px] p-2 cursor-pointer rounded-md px-[30px]' onClick={addToCartFunc}>
                            Add to Cart
                        </button>
                }
            </td>
            <td>
                <button className='text-3xl cursor-pointer text-[#C09578] hover:text-red-500 duration-200' onClick={handleRemoveProdt}>
                    <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    )
}