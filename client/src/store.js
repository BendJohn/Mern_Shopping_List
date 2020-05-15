import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';       // automatically searches in the index.js file

/**
 * Initializes the redux store
 */

const initialState = {};

// Array of everything we use for middleware
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware), // ... is the spread operator
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()      // to use dev tools
));

export default store;       // Whenever this file is imported, this is automatically imported as well