import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    authSlice,
    reducers: {
        loginSuccess(state, action){
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        logout(state){
            state.isAuthenticated = false;
            state.user = null;
        },

        loginFailure(state, action){
            state.error = action.payload;
        },

        loginStart(state){
            state.loading = true;
        }
    }
})

export const {loginFailure, loginStart, logout, loginSuccess} = authSlice.actions
export default authSlice.reducer