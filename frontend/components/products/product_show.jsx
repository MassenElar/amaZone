import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';
import Phone from '../../../app/assets/images/mate_30.jpg'
import FooterContianer from '../welcome/footer_container';


class ProductShow extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  quantity: 1
            }
            this.qtyChange = this.qtyChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
      }
      componentDidMount() {
            this.props.fetchProduct(this.props.match.params.productId)
      }

      qtyChange(e) {
            e.preventDefault();
            this.setState({quantity: e.target.value})
      }

      handleSubmit(e) {
            e.preventDefault();
            const cartItem = {
                  user_id: this.props.currentUser.id,
                  product_id: this.props.product.id,
                  quantity: this.state.quantity
            };
            this.props.createCartItem(cartItem).then(() => this.props.history.push('/cart'));
      }

      render() {
            const { product } = this.props;
            // let price = product.productPrice;
            if (product === undefined) return null 
                  return(
                  <div>
                        <header><WelcomeContainer/></header>
                        <div className="container-show">
                              <img className="show-image" src={product.photoUrl}></img>
                              <div className="grid-show-1">
                                    <p className="product-show-name">{product.productName}</p>
                                    <p className="show-rating">⭐️⭐️⭐️</p>
                                    <p className="product-show-lprice">List Price: <span>${((product.productPrice * 1.2).toFixed(2)) }</span></p>
                                    <p className="product-show-price">Price: <span>${(product.productPrice * 1).toFixed(2)}</span></p>
                                    <p className="product-description">{product.productDescription}</p>
                              </div>
                              <div className="grid-show-2">
                                    <p className="product-show-price"><span>${product.productPrice}</span></p>
                                    <p className="free-return">& FREE Return</p>
                                    <p><span className="free-return">FREE delivery</span></p>
                                    <p>Fast delivery: <span className="fast-delivery">Tomorrow</span></p>
                                    <p className="deliver-to"><i className="fa fa-map-marker"></i>Deliver to { this.props.currentUser.username}</p>
                                    <p className="product-show-invetory">{product.productInventory} Items left.</p>
                                    <form className="buttons" onSubmit={this.handleSubmit}>
                                          <div>
                                                <label htmlFor="qty">Qty:      
                                                      <select id="qty" onChange={this.qtyChange} value={this.state.quantity }> 
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                            <option value={6}>6</option>
                                                            <option value={7}>7</option>
                                                      </select>
                                                </label> 
                                          </div>
                                          <button type="submit" className="show-button-1">Add to Cart</button>
                                          <button className="show-button-2">Buy Now</button>
                                    </form>
                                    <p className="regular-font">Ships from and sold by amaZone.com</p>
                              </div>
                        </div>
                        <FooterContianer/>
                  </div>
            )

      }
}

export default ProductShow;