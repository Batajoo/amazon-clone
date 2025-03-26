import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice";
import cartReducer from "./cartSlice"
import productReducer from "./productSlice"
import orderReducer from "./orderSlice"
import uiReducer from "./uislice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        product: productReducer,
        order: orderReducer,
        ui: uiReducer,
    }
})

export {store}