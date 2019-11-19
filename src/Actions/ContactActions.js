import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from './Types';
import axios from 'axios';

export const getContacts = () => async dispatch => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const deleteContact = id => async dispatch => {
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`); 
        dispatch({
            type: DELETE_CONTACTS,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: DELETE_CONTACTS,
            payload: id
        });
    }
};

export const addContact = contact => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, contact); 
    dispatch ({
        type: ADD_CONTACTS,
        payload: res.data
    });
};