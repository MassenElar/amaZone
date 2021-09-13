import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShow from './product_show'
import { createCartItem } from '../../actions/cart_item_actions'

const mSTP = (state, ownProps) => ({
      product: state.entities.products[ownProps.match.params.productId],
      currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
      fetchProduct: productId => dispatch(fetchProduct(productId)),
      createCartItem: cartItem => dispatch(createCartItem(cartItem))
});

export default connect(mSTP, mDTP)(ProductShow);