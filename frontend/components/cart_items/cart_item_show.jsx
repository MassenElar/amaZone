import React from "react";
import { Link } from "react-router-dom";


class CartItemsShow extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  quantity: this.props.cartItem.quantity,
            }
                  // this.props.cartItem
            
            // this.qtyChange = this.qtyChange.bind(this)
      }
      
      

      componentDidUpdate(prevProps, prevState) {
            if (prevState.quantity !== this.state.quantity) {
                  const updatedCart = {
                        quantity: parseInt(this.state.quantity),
                        product_id: this.props.cartItem.productId,
                        user_id: this.props.currentUser,
                        id: this.props.cartItem.id,
                  }
                  this.props.updateCartItem(updatedCart)
                  location.reload()
            }
      }           

                        

      qtyChange(e) {
            e.preventDefault()
            this.setState({
                  quantity: parseInt(e.currentTarget.value),
            });
      }


      render() {
            if (this.props.cartItem === undefined) return null
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
                                    <form>
                                          <div>
                                                <label htmlFor="qty">      
                                                      <select id="qty" onChange={(e) => this.qtyChange(e)} value={this.state.quantity }> 
                                                            <option value={1}>Qty: 1</option>
                                                            <option value={2}>Qty: 2</option>
                                                            <option value={3}>Qty: 3</option>
                                                            <option value={4}>Qty: 4</option>
                                                            <option value={5}>Qty: 5</option>
                                                            <option value={6}>Qty: 6</option>
                                                            <option value={7}>Qty: 7</option>
                                                            <option value={8}>Qty: 8</option>
                                                            <option value={9}>Qty: 9</option>
                                                            <option value={10}>Qty: 10</option>
                                                            <option value={11}>Qty: 11</option>
                                                            <option value={12}>Qty: 12</option>
                                                            <option value={13}>Qty: 13</option>
                                                            <option value={14}>Qty: 14</option>
                                                            <option value={15}>Qty: 15</option>
                                                            <option value={16}>Qty: 16</option>
                                                            <option value={17}>Qty: 17</option>
                                                            <option value={18}>Qty: 18</option>
                                                            <option value={19}>Qty: 19</option>
                                                            <option value={20}>Qty: 20</option>
                                                      </select>
                                                </label> 
                                          </div>
                                    </form>
                                    <button className="delete-cart free-return" onClick={() => this.props.deleteCartItem(this.props.cartItem)}>Delete this Item</button>
                              </div>
                        </div>
                        <p className="cart-details-price bold-price">${this.props.cartItem.productPrice}</p>
                  </li>
            )
      }
}

export default CartItemsShow;