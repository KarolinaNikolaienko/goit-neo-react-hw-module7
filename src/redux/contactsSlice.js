import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.items.push({ ...payload, id: nanoid() });
    },
    deleteContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== payload
      );
    },
  },
});

export const selectContacts = state => state.contacts.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
