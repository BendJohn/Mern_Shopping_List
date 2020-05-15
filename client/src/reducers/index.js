import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

/**
 * combines different redecurs into one reducer. This is the root reducer
 * for the store
 */

export default combineReducers({
    item: itemReducer
});