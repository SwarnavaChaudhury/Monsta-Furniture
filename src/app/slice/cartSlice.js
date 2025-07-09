import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';




let initialCart = [];

if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('monstaCart');
    initialCart = storedCart ? JSON.parse(storedCart) : [];
}

export const cartSlice = createSlice({
    name: 'monstaCart',
    initialState: {
        // monstaCart: localStorage.getItem('monstaCart') ? JSON.parse(localStorage.getItem('monstaCart')) : []
        monstaCart: initialCart,
    },
    reducers: {
        addToCart(state, reqData) {
            let prodt_obj = reqData.payload; // getting product object
            state.monstaCart.push(prodt_obj);
            if (typeof window !== 'undefined') {
                localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));
            }

            toast.success('Item added successfully!');

        },
        deleteFromCart(state, reqData) {
            let prodt_id = reqData.payload; // getting product id
            state.monstaCart = state.monstaCart.filter((item) => item.id != prodt_id);
            if (typeof window !== 'undefined') {
                localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));
            }

            toast.warn('Product Removed!');

        },
        updateCartIncrement(state, reqData) {
            let prodt_id = reqData.payload; // getting product id
            state.monstaCart = state.monstaCart.map((item) => {
                if (item.id === prodt_id) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    };
                }
                return item;
            });

            if (typeof window !== 'undefined') {
                localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));
            }
        },
        updateCartDecrement(state, reqData) {
            let prodt_id = reqData.payload; // getting product id

            state.monstaCart = state.monstaCart.map((item) => {
                if (item.id === prodt_id) {
                    return {
                        ...item,
                        qty: item.qty - 1
                    };
                }
                return item;
            })
                .filter((item) => item.qty > 0); // Remove if qty <= 0

            if (typeof window !== 'undefined') {
                localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));
            }
        },
    }
})


export const { addToCart, deleteFromCart, updateCartIncrement, updateCartDecrement } = cartSlice.actions
export default cartSlice.reducer