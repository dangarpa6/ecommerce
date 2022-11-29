import { configureStore } from "@reduxjs/toolkit";
import  isLoadingSlice  from "./slices/isLoading.slice";
import products from './slices/products.slice'


   

export default configureStore({
    reducer: {
        products,
        isLoadingSlice: isLoadingSlice
    }
})