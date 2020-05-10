import { GET_ITEMS, ADD_ITEM, DLETE_ITEM } from './types';

// This is the action
export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};