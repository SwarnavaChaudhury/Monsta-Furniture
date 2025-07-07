import React from 'react'
import PageTitle from '../pages/common/PageTitle';
import axios from 'axios';
import CategoryDisplay from '../pages/components/product-page-components/CategoryDisplay';
import ProductDisplay from '../pages/components/product-page-components/ProductDisplay';
import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";




let getCategory = async () => {

    let cateData = await axios.get('https://dummyjson.com/products/categories');
    let cateFinalData = await cateData.data;
    return cateFinalData;

}

let getProduct = async (limit, skip) => {

    let productData = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    let productFinalData = productData.data;
    return productFinalData

}






export default async function ProductDetailsPage({ searchParams }) {

    let allCate = await getCategory();
    // console.log(allCate);

    // let allProdt = await getProduct(30, 0);
    // console.log(allProdt);
    // let totalProdts = allProdt.total;


    let page = parseInt(searchParams?.page) || 1;
    let limit = 30;
    let skip = (page - 1) * limit;

    let allProdt = await getProduct(limit, skip);
    let totalProdts = allProdt.total;
    let totalPages = Math.ceil(totalProdts / limit);




    return (
        <section>

            <PageTitle pg_title={'Online Store'} />


            <div className='lg:w-[1320px] w-full mx-auto grid grid-cols-[25%_auto] gap-[30px]'>
                <div className=''>

                    <h1 className='text-[25px]'>
                        Categories
                    </h1>

                    <div className='mt-2'>

                        <CategoryDisplay catedta={allCate} />

                    </div>

                </div>
                <div className=''>

                    <ProductDisplay prodtdta={allProdt.products} />


                    <div className='flex justify-center items-center mt-10'>
                        <nav aria-label="Page navigation">
                            <ul className="flex items-center space-x-2 text-base">
                                {/* Previous Button */}
                                <li>
                                    <Link href={`?page=${Math.max(1, page - 1)}`}>
                                        <button disabled={page <= 1} className="h-[35px] w-[35px] flex justify-center items-center border rounded disabled:opacity-50 cursor-pointer">
                                            <MdKeyboardDoubleArrowLeft />
                                        </button>
                                    </Link>
                                </li>

                                {/* Page Buttons */}
                                {
                                    Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i}>
                                            <Link href={`?page=${i + 1}`}>
                                                <button
                                                    className={`
                                                        h-[35px] w-[35px] flex justify-center items-center border cursor-pointer rounded
                                                        ${page === i + 1 ? 'bg-blue-500 text-white' : ''}`
                                                    }
                                                >
                                                    {i + 1}
                                                </button>
                                            </Link>
                                        </li>
                                    ))
                                }

                                {/* Next Button */}
                                <li>
                                    <Link href={`?page=${Math.min(totalPages, page + 1)}`}>
                                        <button disabled={page >= totalPages} className="h-[35px] w-[35px] flex justify-center items-center border rounded disabled:opacity-50 cursor-pointer">
                                            <MdKeyboardDoubleArrowRight />
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>


        </section>
    )
}