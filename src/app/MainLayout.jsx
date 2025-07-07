"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { monstaStore } from './store/store'

export default function MainLayout({ children }) {
    return (
        <Provider store={monstaStore}>
            {children}
        </Provider>
    )
}