import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContactApi,
  getContactsApi,
  removeContactApi,
} from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetch', () =>
  getContactsApi()
);

export const addContact = createAsyncThunk('contacts/post', newContact =>
  createContactApi(newContact)
);

export const deleteContact = createAsyncThunk('contacts/delete', id =>
  removeContactApi(id)
);
