import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShow from './product_show'
import { createCartItem } from '../../actions/cart_item_actions'
import { fetchReviews } from '../../actions/review.actions';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {
      return {
            reviews: Object.values(state.entities.reviews),
            product: state.entities.products[ownProps.match.params.productId],
            currentUser: state.entities.users[state.session.id]
      };
}

const mDTP = (dispatch) => ({
      fetchProduct: productId => dispatch(fetchProduct(productId)),
      createCartItem: cartItem => dispatch(createCartItem(cartItem)),
      fetchReviews: (productId) => dispatch(fetchReviews(productId))
});

export default withRouter(connect(mSTP, mDTP)(ProductShow));