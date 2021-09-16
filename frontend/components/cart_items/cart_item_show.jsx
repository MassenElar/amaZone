import React from "react";
import { Link } from "react-router-dom";

class CartItemsShow extends React.Component {
      constructor(props) {
            super(props);
      }


      render() {
            return (
                  <li className="cart-item">
                        <Link to={`/products/${this.props.cartItem.productId}`}><img className="cart-image" src={this.props.cartItem.photoUrl}></img></Link>
                        <div className="cart-item-details">
                              <p className="cart-details-padding cart-item-name">{this.props.cartItem.productName}</p>
                              <p className="cart-details-padding product-show-invetory">In Stock</p>
                              <p className="cart-details-padding">Eligible for FREE Shipping & <span className="free-return">FREE Returns</span></p>
                              <span className="cart-details-padding free-return">Free amaZone tech support included</span>
                              <label className="cart-details-padding"><input type="checkbox"  name="gift" value="gift"/>This is a gift</label>
                              <div className="delete-section">
                                    <p>Qty:  {this.props.cartItem.quantity}</p>
                                    <button className="delete-cart free-return" onClick={() => this.props.deleteCartItem(this.props.cartItem)}>Delete this Item</button>
                              </div>
                        </div>
                        <p className="cart-details-price bold-price">${this.props.cartItem.productPrice}</p>
                  </li>
            )
      }
}

export default CartItemsShow;