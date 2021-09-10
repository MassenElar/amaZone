import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';
import Phone from '../../../app/assets/images/mate_30.jpg'
import Footer from '../welcome/footer';


class ProductShow extends React.Component {
      componentDidMount() {
            this.props.fetchProduct(this.props.match.params.productId)
      }

      render() {
            const { product } = this.props;
            if (product === undefined) return null 
                  return(
                  <div>
                        <header><WelcomeContainer/></header>
                        <div className="container-show">
                              <img className="show-image" src={window.mate_30URL}></img>
                              <div className="grid-show-1">
                                    <p className="product-show-name">{product.productName}</p>
                                    <p className="show-rating">⭐️⭐️⭐️</p>
                                    <p className="product-show-lprice">List Price: <span>${product.productPrice - (product.productPrice * 0.2) }</span></p>
                                    <p className="product-show-price">Price: <span>${product.productPrice}</span></p>
                                    <p className="product-description">{product.productDescription}</p>
                              </div>
                              <div className="grid-show-2">
                                    <p className="product-show-price"><span>${product.productPrice}</span></p>
                                    <p className="product-show-invetory">{product.productInventory} Items left</p>
                                    <button className="show-button">Add to Cart</button>
                                    <button className="show-button">Buy Now</button>
                              </div>
                              </div>
                              <Footer/>
                  </div>
            )

      }
}

export default ProductShow;