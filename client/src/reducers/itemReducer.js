import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

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
    items: [],
    loading: false
}

// These are the props
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return  {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}