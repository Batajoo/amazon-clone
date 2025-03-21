import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
    sidebarOpen: false,
    notification: null
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toogleTheme: (state) => {
            if(state.theme === "light") state.theme = "dark";
            else if (state.theme === "dark") state.theme = "light";
        },
        sidebarOpen: (state) => {
            state.sidebarOpen = !sidebarOpen;
        },
        setNotification: (state, action) => {
            state.notification = action.payload;
        }
    }
})

export {toogleTheme, sidebarOpen, setNotification} = uiSlice.actions;
export default uiSlice.reducer;