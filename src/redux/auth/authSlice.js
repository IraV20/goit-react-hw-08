import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./authOperation";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.isError = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isLoading: false,
        isError: null,
        isRefreshing: false,
    },
    extraReducers: builder => builder
        .addCase(register.pending, handlePending)
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, handleRejected)
        .addCase(logIn.pending, handlePending)
        .addCase(logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.user = action.payload.user;
            state.token = action.payload.token; 
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, handleRejected)
        .addCase(logOut.pending, handlePending)
        .addCase(logOut.fulfilled, (state) => {
            state.isLoading = false;
            state.isError = null;
            state.isLoggedIn = false;
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
        })
        .addCase(logOut.rejected, handleRejected)
        .addCase(refreshUser.pending, (state) => {
            state.isLoading = true;
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
    
});

export default authSlice.reducer;