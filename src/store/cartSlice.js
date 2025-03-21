import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalItems: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
            state.total += action.payload.price;
            state.totalItems++;
        },
        removeItem: (state, action) => {
            state.cartItems.filter((item) => item.id === action.payload);
            if(state.totalItems > 0){
                state.totalAmount -= action.payload.price;
                state.totalItems--;
            }

        },
        clearCart: (state) => {
            state.cartItems = []
            state.totalAmount = 0
            state.totalItems = 0
        }

    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;