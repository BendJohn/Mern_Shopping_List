import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
// Container is wrapped with curly braces because it is reactstrap.container,
// but we don't want to write that
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * This is the html for the main page. Between the <div classname="App" are
 * the different components that make up the page.
 * 
 * Provider allows the store to be available to everything between the <provider>
 */

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
        <ItemModal/>
        <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;