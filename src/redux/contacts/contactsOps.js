import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", 
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/contacts");
            return res.data;                
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk("contacts/addContact",
    async (contacts, thunkAPI) => {
        try {
            const res = await axios.post("/contacts", contacts);            
            return res.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async(contactId, thunkAPI ) => {
        try {
            const res = await axios.delete(`contacts/${contactId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);            
        }
    }
);

export const updateContact = createAsyncThunk("contacts/updateContact",
    async ({contactId, updateData}, thunkAPI) => {
        try {
            const res = await axios.patch(`contacts/${contactId}`, updateData);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)




