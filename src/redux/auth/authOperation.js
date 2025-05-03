import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", 
    async (newUser, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", newUser);
            // додаємо на будь-який наступний запит заголовок (header:) Avtorization зі значенням Bearer {token}:
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logIn = createAsyncThunk("auth/login", 
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", userData);
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            return res.data;
        } catch (error) {
             return thunkAPI.rejectWithValue(error.message);
        }
       
    }
)

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        const res = await axios.post("/users/logout");
        axios.defaults.headers.common['Authorization'] = "";
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.token}`;

    const res = await axios.get("/users/current");
    return res.data;
        
},
{
    condition(_, thunkAPI) {
        const state = thunkAPI.getState();   
        return state.auth.token !== null;
    }
})