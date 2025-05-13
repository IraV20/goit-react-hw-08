import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./contactsOps";
import { selectNameFilter } from "../filters/filtersSlice";
import { logOut } from "../auth/authOperation";
import { selectContacts } from "./contactsSelectors";

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((contact) => contact.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(logOut.pending, handlePending)
        .addCase(logOut.fulfilled, (state) => {
            state.items = [];
            state.loading = false;
            state.error = null;
        })
        .addCase(logOut.rejected, handleRejected)
        .addCase(updateContact.pending, handlePending)
        .addCase(updateContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.map(contact => 
                contact.id === action.payload.id ? action.payload : contact
            )
        })
        .addCase(updateContact.rejected, handleRejected)
    }
    
});

export default contactsSlice.reducer;


export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], 
    (contacts, filters) => {
        
        return contacts.filter((contact) => 
            contact.name.toLowerCase().includes(filters.toLowerCase()) || 
            contact.number.toString().includes(filters));

    }
);

    

