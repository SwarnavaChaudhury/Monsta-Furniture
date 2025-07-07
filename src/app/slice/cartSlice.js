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

        },
        updateCartDecrement(state, reqData) {
            let prodt_id = reqData.payload; // getting product id

        },
    }
})


export const { addToCart, deleteFromCart, updateCartIncrement, updateCartDecrement } = cartSlice.actions
export default cartSlice.reducer