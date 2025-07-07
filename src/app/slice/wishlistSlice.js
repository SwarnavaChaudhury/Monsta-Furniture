import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


export const wishlistSlice = createSlice({
    name: 'monstaWishlist',
    initialState: {
        monstaWishlist: localStorage.getItem('monstaWishlist') ? JSON.parse(localStorage.getItem('monstaWishlist')) : []
    },
    reducers: {
        addToWishlist(state, reqData) {
            let prodt_obj = reqData.payload; // getting product object
            state.monstaWishlist.push(prodt_obj);
            localStorage.setItem('monstaWishlist', JSON.stringify(state.monstaWishlist));

            toast.success('Item add to wishlist!');

        },
        removeFromWishlist(state, reqData) {
            let prodt_id = reqData.payload; // getting product id
            state.monstaWishlist = state.monstaWishlist.filter((item) => item.id != prodt_id);
            localStorage.setItem('monstaWishlist', JSON.stringify(state.monstaWishlist));

            toast.warn('Item removed from wishlist!');

        },
    }
})





export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer