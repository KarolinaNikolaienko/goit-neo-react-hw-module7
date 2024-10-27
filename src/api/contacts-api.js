import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://671e9cc11dfc42991982c322.mockapi.io',
});

export const getContactsApi = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const createContactApi = async newContact => {
  const { data } = await instance.post('/contacts', newContact);
  return data;
};

export const removeContactApi = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
