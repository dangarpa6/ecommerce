import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";
import  isLoadingSlice  from "./slices/isLoading.slice";
import products from './slices/products.slice'
import purchasesSlice from './slices/puchases.slice'

   

export default configureStore({
    reducer: {
        products,
        isLoadingSlice: isLoadingSlice,
        purchases: purchasesSlice,
        cart : cartSlice
    }
})