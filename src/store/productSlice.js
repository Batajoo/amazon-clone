import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProductsStart: (state) =>{
            state.loading = true;
        },
        fetchProductsSuccess: (state, action) => {
            state.product = action.payload;
            state.error = null;
            state.loading = false;
        },
        fetchProductsFailure: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {fetchProductsStart, fetchProductsFailure, fetchProductsSuccess} = productSlice.actions
export default productSlice.reducer