import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers:{
setProducts: (state, action) => {
    return action.payload}
    }
})
 

export const getAllProducts = () => dispatch => {
    dispatch(setIsLoading(true))
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products'
    return axios.get(URL)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .finally(()=> dispatch(setIsLoading(false)));
    
}

export const filterProducts = (id) => dispatch => {
    dispatch(setIsLoading(true));
    const URL = (`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    return axios.get(URL)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(()=> dispatch(setIsLoading(false)));
    
}

export const filtredTitle = (inputSearch) => dispatch => {
    dispatch(setIsLoading(true));
    const URL = (`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`)
    return axios.get(URL)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .finally(()=> dispatch(setIsLoading(false)));
    
}






export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer