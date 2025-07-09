"use client";
import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../MainLayout';
import { useRouter } from 'next/navigation';
import PageTitle from '../pages/common/PageTitle';
import Link from 'next/link';
import OrderSection from '../pages/components/dashboard-components/OrderSection';
import AddressSection from '../pages/components/dashboard-components/AddressSection';
import MyProfile from '../pages/components/dashboard-components/MyProfile';
import ChangePass from '../pages/components/dashboard-components/ChangePass';

export default function Dashboard() {

    const { UserID, setUserID, UserToken, setUserToken } = useContext(LoginContext);
    const router = useRouter();

    let [selectedAdminMenu, setSelectedAdminMenu] = useState('my-dashboard');

    useEffect(() => {
        if (!UserToken) {
            router.push('/');
        }
    }, [UserToken, router]);

    let handleLogout = () => {
        localStorage.removeItem('montaUser');
        localStorage.removeItem('montaToken');

        setUserID([]);
        setUserToken('');

        router.push('/login-register');
    };


    return (
        <section>

            <PageTitle pg_title={'My Dashboard'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10 grid lg:grid-cols-[25%_auto] gap-[30px]'>
                <div>

                    <div
                        className={`
                            font-bold text-[14px] text-white h-[40px] pl-5 duration-300 mb-[10px] cursor-pointer flex justify-start items-center
                            ${selectedAdminMenu == 'my-dashboard' ? 'bg-[#C09578]' : 'bg-black hover:bg-[#C09578]'}
                            `}
                        onClick={() => setSelectedAdminMenu('my-dashboard')}
                    >
                        My Dashboard
                    </div>
                    <div
                        className={`
                            font-bold text-[14px] text-white h-[40px] pl-5 duration-300 mb-[10px] cursor-pointer flex justify-start items-center
                            ${selectedAdminMenu == 'orders' ? 'bg-[#C09578]' : 'bg-black hover:bg-[#C09578]'}
                            `}
                        onClick={() => setSelectedAdminMenu('orders')}
                    >
                        Orders
                    </div>
                    <div
                        className={`
                            font-bold text-[14px] text-white h-[40px] pl-5 duration-300 mb-[10px] cursor-pointer flex justify-start items-center
                            ${selectedAdminMenu == 'addresses' ? 'bg-[#C09578]' : 'bg-black hover:bg-[#C09578]'}
                            `}
                        onClick={() => setSelectedAdminMenu('addresses')}
                    >
                        Addresses
                    </div>
                    <div
                        className={`
                            font-bold text-[14px] text-white h-[40px] pl-5 duration-300 mb-[10px] cursor-pointer flex justify-start items-center
                            ${selectedAdminMenu == 'my-profile' ? 'bg-[#C09578]' : 'bg-black hover:bg-[#C09578]'}
                            `}
                        onClick={() => setSelectedAdminMenu('my-profile')}
                    >
                        My Profile
                    </div>
                    <div
                        className={`
                            font-bold text-[14px] text-white h-[40px] pl-5 duration-300 mb-[10px] cursor-pointer flex justify-start items-center
                            ${selectedAdminMenu == 'change-password' ? 'bg-[#C09578]' : 'bg-black hover:bg-[#C09578]'}
                            `}
                        onClick={() => setSelectedAdminMenu('change-password')}
                    >
                        Change Password
                    </div>
                    <div
                        className={`
                            font-bold text-[14px] text-white h-[40px] pl-5 duration-300 mb-[10px] cursor-pointer flex justify-start items-center
                            ${selectedAdminMenu == 'logout' ? 'bg-[#C09578]' : 'bg-black hover:bg-[#C09578]'}
                            `}
                        onClick={handleLogout}
                    >
                        Logout
                    </div>

                </div>
                <div className='border border-gray-200 p-5'>

                    {
                        selectedAdminMenu == 'my-dashboard'
                            ?
                            <div>
                                <h1 className='text-2xl font-bold mb-3'>
                                    My Dashboard
                                </h1>
                                <p className='text-[14px] text-[#5a5a5a]'>
                                    From your account dashboard. you can easily check & view your <span className='font-bold cursor-pointer' onClick={() => setSelectedAdminMenu('orders')}>recent orders</span>, manage your <span className='font-bold cursor-pointer' onClick={() => setSelectedAdminMenu('addresses')}>shipping and billing addresses</span> and Edit your <span className='font-bold cursor-pointer' onClick={() => setSelectedAdminMenu('change-password')}>password</span> and <span className='font-bold cursor-pointer' onClick={() => setSelectedAdminMenu('my-profile')}>account details</span>.
                                </p>
                            </div>
                            :
                            selectedAdminMenu == 'orders'
                                ?
                                <OrderSection />
                                :
                                selectedAdminMenu == 'addresses'
                                    ?
                                    <AddressSection />
                                    :
                                    selectedAdminMenu == 'my-profile'
                                        ?
                                        <MyProfile />
                                        :
                                        selectedAdminMenu == 'change-password'
                                            ?
                                            <ChangePass />
                                            :
                                            <div className='text-[12px] text-gray-400'>
                                                Please select any menu.
                                            </div>
                    }

                </div>
            </div>
        </section>
    );
}
