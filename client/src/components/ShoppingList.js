import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

/**
 * This is an example component. It is a list of shopping list items. We import
 * the class ShoppingList in our app.js to use it.
 * 
 * At the very bottom, we connect props (actions) that can change the state.
 */

class ShoppingList extends Component {
    // Lifecycle method that runs when the component mounts
    // Wehn you're are calling an action or making an API request
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return <Container>
            {/* <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name  = prompt('Enter Item');
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name}]
                        }));
                    }
                }}>
                    Add Item
                </Button> */}

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
        </Container>;
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

/**
 * Takes a peice of state and maps it to aproprties variable that this component
 * can use
 * @param {store-state} state 
 */
const mapStateToProps = (state) => ({
    item: state.item        // 'item' because we used item in our reducers/index.js
});

// Connecting the properties list to the store
export default connect(mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList);