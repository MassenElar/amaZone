import { connect } from "react-redux";
import  CartItems  from "./cart_items";
import { fetchCartItem, fetchCartItems, createCartItem, deleteCartItem } from "../../actions/cart_item_actions";


const mSTP = state => ({
      cartItems: Object.values(state.entities.cartItems),
      currentUser: state.session.id 
})

const mDTP = dispatch => ({
      fetchCartItems: () => dispatch(fetchCartItems()),
      fetchCartItem: (cartItem) => dispatch(fetchCartItem(cartItem)),
      createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
      deleteCartItem: (cartItem) => dispatch(deleteCartItem(cartItem))

})

export default connect(mSTP, mDTP)(CartItems);