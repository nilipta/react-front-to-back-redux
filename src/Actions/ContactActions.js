import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from './Types';
import axios from 'axios';

export const getContacts = () => async dispatch => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACTS,
        payload: id
    };
};

export const addContact = (contact) => {
    return {
        type: ADD_CONTACTS,
        payload: contact
    };
};