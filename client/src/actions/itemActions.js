import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
const axios = require('axios');

// This is the GET action
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items').then(res => 
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    )
};

// This is the ADD action
export const addItem = item => dispatch => {
    axios.post('/api/items', item).then(res =>
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    )
};

// This is the DELETE action
export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`).then(res =>                // Back ticks (``) allow a format string
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
};

// This is the LOADING dispatcher
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};