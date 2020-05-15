import {v1 as uuid} from 'uuid';        // uuid gives a different id everytime it is called
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

/**
 * An application has a stored state. Users can apply actions to this stored state.
 * The reducer takes an action and a state and returns a new state that becomes the
 * current state.
 * 
 * An action has a type and an optional payload. For example, the DELETE_ITEM 
 * payload is an ID, but the ADD_ITEM payload is the item to be added. The reducer
 * determines how the state should be manipulated given an action.
 */

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk'},
        { id: uuid(), name: 'Steak'},
        { id: uuid(), name: 'Candy'}
    ]
}

// These are the props
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return  {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}