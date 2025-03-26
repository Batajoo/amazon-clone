import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    currentOrder: null,
    loading: false,
    error: null
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        placeOrderStart: (state) => {
            state.loading = true;
        },
        placeOrderSuccess: (state, action) => {
            state.currentOrder = action.payload;
            state.orders.push(action.payload);
            state.error = null;
            state.loading = false;
        },
        placeOrderFailure: (state, action) => {
            state.error = action.payload;
        },
        fetchOrders: (state,action)=>{
            state.orders = action.payload;
        }
    }
})

export default orderSlice.reducer
export const {placeOrderStart, placeOrderFailure, placeOrderSuccess, fetchOrders} = orderSlice.actions