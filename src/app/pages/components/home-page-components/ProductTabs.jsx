"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../product-page-components/ProductCard';
import axios from 'axios';




export default function ProductTabs() {

    const [selectedTab, setSelectedTab] = useState('featured');
    const [prodtLst, setProdtLst] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProduct = async (limit, skip) => {
        const productData = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        return productData.data.products; // 🟢 only the array of products
    };


    const fetchProducts = async (tab) => {
        setLoading(true);
        let data = [];
        if (tab === 'featured') {
            data = await getProduct(7, 0);
        } else if (tab === 'newarrivals') {
            data = await getProduct(7, 15);
        } else if (tab === 'onsale') {
            data = await getProduct(6, 30);
        }
        setProdtLst(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts(selectedTab);
    }, [selectedTab]);

    const handleSelectedTab = (str) => {
        setSelectedTab(str);
    };


    return (
        <section className='my-5'>


            <div className='flex justify-center items-center'>

                <div className="
                        flex justify-center items-center relative lg:flex-row flex-col
                        lg:before:content-[''] lg:before:w-[200px] lg:before:h-[2px] lg:before:absolute lg:before:right-full lg:before:top-1/2 
                        lg:before:[background-image:linear-gradient(to_right,transparent,#ebebeb)] 
                        lg:after:content-[''] lg:after:w-[200px] lg:after:h-[2px] lg:after:absolute lg:after:left-full lg:after:top-1/2 
                        lg:after:[background-image:linear-gradient(to_left,transparent,#ebebeb)]
                    ">

                    <div
                        className={`
                                lg:text-2xl text-[20px] lg:px-7 px-0 lg:py-3 py-1 font-normal cursor-pointer lg:w-auto w-[200px] lg:text-left text-center
                                lg:mb-0 mb-[6px]
                                ${selectedTab == 'featured' ? 'border-[#C09578] text-[#C09578] border-2' : 'border border-[#ccc]'}
                            `}
                        onClick={() => handleSelectedTab('featured')}
                    >
                        Featured
                    </div>
                    <div
                        className={`
                                lg:text-2xl text-[20px] lg:px-7 px-0 lg:py-3 py-1 font-normal cursor-pointer lg:w-auto w-[200px] lg:text-left text-center
                                lg:mb-0 mb-[6px]
                                ${selectedTab == 'newarrivals' ? 'border-[#C09578] text-[#C09578] border-2' : 'border border-[#ccc]'}
                            `}
                        onClick={() => handleSelectedTab('newarrivals')}
                    >
                        New Arrivals
                    </div>
                    <div
                        className={`
                                lg:text-2xl text-[20px] lg:px-7 px-0 lg:py-3 py-1 font-normal cursor-pointer lg:w-auto w-[200px] lg:text-left text-center
                                lg:mb-0 mb-[6px]
                                ${selectedTab == 'onsale' ? 'border-[#C09578] text-[#C09578] border-2' : 'border border-[#ccc]'}
                            `}
                        onClick={() => handleSelectedTab('onsale')}
                    >
                        Onsale
                    </div>
                </div>

            </div>




            <div className='lg:w-[1320px] w-full mx-auto lg:px-0 px-5 grid lg:grid-cols-4 grid-cols-1 gap-5 mt-6'>

                {
                    loading ? (
                        <p className="text-center col-span-4">Loading products...</p>
                    ) : (
                        prodtLst.map((item, index) => (
                            <ProductCard prodt_dtls={item} key={index} />
                        ))
                    )
                }

            </div>



        </section>
    )
}