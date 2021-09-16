import { combineReducers } from 'redux';
import users from './users_reducer';
import products from './products_reducer';
import cartItems from './cart_item_reducer';
import reviews from './reviews_reducer';

const entitiesReducer = combineReducers({
  users,
  products,
  cartItems,
  reviews,
});

export default entitiesReducer;