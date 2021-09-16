import React from "react";
import { Link } from "react-router-dom";
import WelcomeContainer from "../welcome/welcome_container";
import FooterContainer from "../welcome/footer_container";
import CartItemsShow from "./cart_item_show";

class CartItems extends React.Component {
      constructor(props) {
            super(props)
           
            this.state = {
                  checkoutSuccess: ''
            }
            this.removeAll = this.removeAll.bind(this)
      }

      componentDidMount() {
            this.props.fetchCartItems();
      }

      removeAll() {
            this.props.cartItems.forEach(cartItem => {
                  this.props.deleteCartItem(cartItem)
            })
            this.setState({checkoutSuccess: <p className="checkout-success">Your Oreder is Confirmed!</p>})
      }


      render() {
            let sum = 0;
            this.props.cartItems.forEach(cartItem => {
                  sum += (parseFloat(cartItem.productPrice) * cartItem.quantity)
            });
            
            let sumQty = 0;
            this.props.cartItems.forEach(cartItem => {
                  sumQty += cartItem.quantity
            });


            const total = (sum * 1).toFixed(2);

            // if (this.props.cartItems.length === 0) {
            //       return (
            //             <div>
            //                   <p>Your amaZone Cart is Empty</p>
            //             </div>
            //       )

            // } else {
                  
                  return (
                        <div>
                              <WelcomeContainer/>
                              <div className="cart">
                                    <div className="left-side-cart">
                                          <h1 className="cart-title">Shopping Cart</h1>
                                          <p>Price</p>
                                          <ul>
                                                {(this.props.cartItems.length === 0) ?
                                                      <div>
                                                            <p className="empty-cart">Your amaZone Cart is Empty</p>
                                                      </div> :
                              
                                                            this.props.cartItems.map((cartItem) => (
                                                                  <CartItemsShow key={cartItem.id} cartItem={cartItem} deleteCartItem={this.props.deleteCartItem} />
                                                            ))
                                                      }
                                          </ul>
                                          <div className="subtotal">
                                                <p>Subtotal({sumQty} item):<span className="bold-price"> ${total }</span></p>
                                          </div>
                                    </div>
                                    <div className="right-side-cart">
                                          <div className="greencheck">
                                                <i className="fa fa-check-circle"></i>
                                                <p>Your order qualifies for FREE Shipping.</p>
                                          </div>
                                          <p>Subtotal({sumQty} item):<span className="bold-price"> ${total}</span></p>
                                          {this.props.cartItems.length >= 1 ? <button className="checkout-button" onClick={this.removeAll}>Proceed to checkout</button> : null}
                                          { this.state.checkoutSuccess}
                                    </div>
                              </div>
                              <FooterContainer/>
                        </div>
                  )
            
      }
}

export default CartItems;