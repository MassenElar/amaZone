import React from 'react';
import { Link } from 'react-router-dom';
import Phone from '../../../app/assets/images/mate_30.jpg' 

class ProductIndexItem extends React.Component {
      constructor(props) {
            super(props);
      }


      render() {
            return (
                  <li className="product_item">
                        <Link className="product_link" to={`/Products/${this.props.product.id}`}>
                              <img src={window.mate_30URL}></img>
                              <div className="item-details">
                                    <h1>{this.props.product.productName.split(" ").slice(0, 5).join(" ")}</h1>
                              
                              {/* <p>Inventory:   {this.props.product.productInventory}</p> */}
                                    
                                    <div className="details-price">
                                          <p>$</p>
                                          <strong>{this.props.product.productPrice}</strong>
                                    </div>
                                    <div className="rating">
                                          <p>⭐️ ⭐️ ⭐️ ⭐️ </p>
                                    </div>
                              </div>
                              <button>Add To Cart</button>
                        </Link>
                  </li>
            )
      }
};

export default ProductIndexItem;