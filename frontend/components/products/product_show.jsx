import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';
import Phone from '../../../app/assets/images/mate_30.jpg'
import FooterContianer from '../welcome/footer_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import ReactStars from "react-rating-stars-component";



class ProductShow extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  quantity: 1,
                  reviews: this.props.reviews
            }
            this.qtyChange = this.qtyChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
      }
      componentDidMount() {
          
            this.props.fetchProduct(this.props.match.params.productId).then((res) => this.props.fetchReviews(this.props.match.params.productId).then((res) => this.forceUpdate()))
            // this.props.fetchReviews(this.props.match.params.productId)
      }

      componentDidUpdate(prevProps) {
            if (prevProps.reviews.length !== this.props.reviews.length) {
                  this.setState({reviews: this.props.reviews})
            }
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
            const { product, reviews } = this.props;
            if (product === undefined) return null 
            // let price = product.productPrice;
            let ratingTotal = 0;
            let overallRating = 1;
            let productRating;
            if (this.state.reviews.length !== 0) {

                  this.state.reviews.forEach(review => {
                        ratingTotal += review.rating
                  });
                  overallRating = Math.round(ratingTotal / this.state.reviews.length)
                  productRating = <ReactStars count={5} value={overallRating} size={20} edit={false} isHalf={true} activeColor="#ffd700" />
            } 
            console.log(overallRating);
           
                  return(
                  <div>
                        <header><WelcomeContainer/></header>
                        <div className="container-show">
                              <img className="show-image" src={product.photoUrl}></img>
                              <div className="grid-show-1">
                                    <p className="product-show-name">{product.productName}</p>
                                    <div className=" show-rating">
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
                        <ReviewsIndexContainer product={this.props.product}/>
                        {/* <Link to={`/products/${product.id}/reviews/create`}><button>Add a Review</button></Link>   */}
                        <FooterContianer/>
                  </div>
            )

      }
}

export default ProductShow;