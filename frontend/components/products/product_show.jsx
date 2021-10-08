import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';
import Phone from '../../../app/assets/images/mate_30.jpg'
import FooterContianer from '../welcome/footer_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import ReactStars from "react-rating-stars-component";
import { withRouter } from 'react-router';




class ProductShow extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  quantity: 1,
                  // overAllRating: 1,
                  reviews: this.props.reviews
            }
            this.qtyChange = this.qtyChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.cartHasItems = this.cartHasItems.bind(this)
      }
      componentDidMount() {
          
            this.props.fetchProduct(this.props.match.params.productId);
            this.props.fetchReviews(this.props.match.params.productId);
            this.props.fetchCartItems();
      }

      componentWillReceiveProps(nextProps) {
           this.setState({reviews: nextProps.reviews})
      }

      componentDidUpdate(prevProps){
            if (prevProps.reviews.length !== this.props.reviews.length) {
                  this.setState({reviews: this.props.reviews})
            }
      }
      
      cartHasItems() {
            let check = false;
            this.props.cartItems.forEach((cartItem) => {
                  if (cartItem.productId === this.props.product.id) {
                        check = true;
                  } else {
                        check = false;
                  }
            })
            return check;
      }

      qtyChange(e) {
            e.preventDefault();
            this.setState({quantity: e.target.value})
      }

      handleSubmit(e) {
            e.preventDefault();
            if (!this.props.currentUser) {
                  this.props.history.push("/login");
            }
            const cartItem = {
                  user_id: this.props.currentUser,
                  product_id: this.props.product.id,
                  quantity: parseInt(this.state.quantity)
            };

            let cartItemId;
            this.props.cartItems.forEach((cartItem) => {
                  if (cartItem.productId === this.props.product.id) {
                        cartItemId = cartItem.id
                  }
            });

            const currentItem = this.props.cartItems.filter(
                  (cartItem) => cartItem.id === cartItemId
            );

            const currentQuantity = currentItem.length > 0 ? currentItem[0].quantity : 0;
            // debugger
            const updatedCartItem = {
                  quantity: currentQuantity + parseInt(this.state.quantity),
                  product_id: this.props.product.id,
                  user_id: this.props.currentUser,
                  id: cartItemId
            }

            if (this.cartHasItems()) {
                  this.props.updateCartItem(updatedCartItem).then(() => this.props.history.push('/cart'))
            } else {
                  this.props.createCartItem(cartItem).then(() => this.props.history.push('/cart'));
            }

      }


     

      render() {
            const { product, reviews } = this.props;
            if (product === undefined) return null 
           
            let productRating;
            if (reviews !== undefined) {

                  let totalRating = 0;
                  let overAllRating = 1;
                  reviews.forEach(review => {
                       totalRating += review.rating;
                  });
                  overAllRating = Math.round(totalRating / reviews.length)
                  productRating = <ReactStars count={5} value={overAllRating} size={20} edit={false} isHalf={true} activeColor="#ffd700" />
                  console.log(overAllRating)
            }
            
                  return(
                  <div>
                        <header><WelcomeContainer/></header>
                        <div className="container-show">
                              <img className="show-image" src={product.photoUrl}></img>
                              <div className="grid-show-1">
                                    <p className="product-show-name">{product.productName}</p>
                                    <div className=" show-rating">
                                                {/* <ReactStars count={5} value={overAllRating} size={20} edit={false} isHalf={true} activeColor="#ffd700" /> */}
                                                {productRating}
                                    </div>
                                    <p className="product-show-lprice">List Price: <span>${((product.productPrice * 1.2).toFixed(2)) }</span></p>
                                    <p className="product-show-price">Price: <span>${(product.productPrice * 1).toFixed(2)}</span></p>
                                    <p className="product-description">{product.productDescription}</p>
                              </div>
                              <div className="grid-show-2">
                                    <p className="product-show-price"><span>${product.productPrice}</span></p>
                                    <p className="free-return">& FREE Return</p>
                                    <p><span className="free-return">FREE delivery</span></p>
                                    <p>Fast delivery: <span className="fast-delivery">Tomorrow</span></p>
                                    <p className="deliver-to"><i className="fa fa-map-marker"></i>Deliver to { this.props.loggedIn ? this.props.currentUser.username : null }</p>
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
                              <ReviewsIndexContainer product={this.props.product} key={ this.state.key}/>
                        {/* <Link to={`/products/${product.id}/reviews/create`}><button>Add a Review</button></Link>   */}
                        <FooterContianer/>
                  </div>
            )

      }
}

export default withRouter(ProductShow);