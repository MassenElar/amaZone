import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_item_actions";

const CartItemsReducer = (state = {}, action) => {
      Object.freeze(state);
      const nextState = Object.assign({}, state)
      switch (action.type) {
            case RECEIVE_CART_ITEMS:
                  return action.items;
            case RECEIVE_CART_ITEM:
                  nextState[action.item.id] = action.item
                  return nextState;
            case REMOVE_CART_ITEM:
                  delete nextState[action.item.id]
                  return nextState;
            
            default:
                  return state;
           
      }
}

export default CartItemsReducer;