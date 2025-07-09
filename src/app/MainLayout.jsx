"use client"
import React, { createContext, useState } from 'react'
import { Provider } from 'react-redux'
import { monstaStore } from './store/store'

export let LoginContext = createContext();

export default function MainLayout({ children }) {

    // let [UserID, setUserID] = useState(localStorage.getItem('montaUser') ? JSON.parse(localStorage.getItem('montaUser')) : []);
    let [UserID, setUserID] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem('montaUser') ? JSON.parse(localStorage.getItem('montaUser')) : [];
        }
        return [];
    });
    let [UserToken, setUserToken] = useState(localStorage.getItem('montaToken') ? localStorage.getItem('montaToken') : '');

    
    let login_obj = {
        UserID,
        setUserID,
        UserToken,
        setUserToken
    }

    return (
        <Provider store={monstaStore}>
            <LoginContext.Provider value={login_obj}>
                {children}
            </LoginContext.Provider>
        </Provider>
    )
}