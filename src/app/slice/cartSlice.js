import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


export const cartSlice = createSlice({
    name: 'monstaCart',
    initialState: {
        monstaCart: localStorage.getItem('monstaCart') ? JSON.parse(localStorage.getItem('monstaCart')) : []
    },
    reducers: {
        addToCart(state, reqData) {
            let prodt_obj = reqData.payload; // getting product object
            state.monstaCart.push(prodt_obj);
            localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));

            toast.success('Item added successfully!');

        },
        deleteFromCart(state, reqData) {
            let prodt_id = reqData.payload; // getting product id
            state.monstaCart = state.monstaCart.filter((item) => item.id != prodt_id);
            localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));

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

            localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));
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

            localStorage.setItem('monstaCart', JSON.stringify(state.monstaCart));
        },
    }
})


export const { addToCart, deleteFromCart, updateCartIncrement, updateCartDecrement } = cartSlice.actions
export default cartSlice.reducer