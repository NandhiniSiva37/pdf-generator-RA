import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  title: "Contact Page",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    saveContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.splice(action.payload, 1);
    },
    editContact: (state, action) => {
      const { index, contactData } = action.payload;
      state.contacts[index] = contactData;
    },
  },
});

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { saveContact, deleteContact, editContact } = contactSlice.actions;
export const { setTitle } = titleSlice.actions;

export const contactReducer = contactSlice.reducer;
export const titleReducer = titleSlice.reducer;
