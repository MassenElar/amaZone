import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShow from './product_show'

const mSTP = (state, ownProps) => ({
      product: state.entities.products[ownProps.match.params.productId],
      // loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
      fetchProduct: productId => dispatch(fetchProduct(productId))
});

export default connect(mSTP, mDTP)(ProductShow);