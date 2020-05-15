import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// This is the GET action
export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

// This is the DELETE action
export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};

// This is the ADD action
export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};