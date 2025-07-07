import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
import wishlistSlice from "../slice/wishlistSlice";


export const monstaStore = configureStore({
    reducer: {
        monstaCartReducer: cartSlice,
        monstaWishlistReducer: wishlistSlice,
    }
})