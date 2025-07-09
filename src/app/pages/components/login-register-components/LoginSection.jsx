"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebase_app } from '@/app/googleLoginCredential/googleAuth';
import { useRouter } from 'next/navigation';
import { LoginContext } from '@/app/MainLayout';






export default function LoginSection() {

    let [showPass, setShowPass] = useState(false);
    let { UserID, setUserID, UserToken, setUserToken } = useContext(LoginContext);

    const router = useRouter();

    let handleLogin = () => {

        const provider = new GoogleAuthProvider();
        const auth = getAuth(firebase_app);

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                // console.log("User: ", user);
                // console.log("Token: ", token);

                setUserID(user);
                setUserToken(token);

                localStorage.setItem('montaUser', JSON.stringify(user));
                localStorage.setItem('montaToken', token);

                router.push('/dashboard');

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error);
            });

    }

    if (UserToken) {
        router.push('/');
    }

    return (
        <div>

            <h1 className='text-2xl mb-5 uppercase'>
                login
            </h1>

            <div className='border border-gray-200 p-7 rounded-md'>

                <label htmlFor="login_user_email" className='block mb-2 font-bold'>
                    Email *
                </label>
                <input type="email" name="login_user_email" id="login_user_email" placeholder='Enter Email Address...' className='block border border-gray-200 w-full px-3 h-[40px] mb-5 outline-none text-[14px]' />
                <label htmlFor="login_user_pass" className='block mb-2 font-bold'>
                    Password *
                </label>
                <div className='relative'>
                    <input type={showPass ? 'text' : 'password'} name="login_user_pass" id="login_user_pass" placeholder='Enter Password...' className='block border border-gray-200 w-full pl-3 pr-10 h-[40px] mb-10 outline-none text-[14px]' />
                    <span className='absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-2xl' onClick={() => setShowPass(!showPass)}>
                        {
                            showPass
                                ?
                                <FaEyeSlash />
                                :
                                <FaEye />
                        }
                    </span>
                </div>

                <div className='flex justify-between items-center mb-5'>
                    <Link href={'/'} className='text-[#C09578] text-[14px]'>
                        Lost your password?
                    </Link>
                    <button type='submit' className='uppercase text-[14px] bg-[#C09578] font-bold text-white hover:bg-black duration-300 cursor-pointer px-[20px] py-[10px] rounded-[20px]'>
                        Login
                    </button>
                </div>

                <div>
                    <button className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-300 rounded-md cursor-pointer w-full flex justify-center items-center gap-2 h-[40px] font-bold' onClick={handleLogin}>
                        <FaGooglePlus />
                        Login with Google
                    </button>
                </div>

            </div>

        </div>
    )
}