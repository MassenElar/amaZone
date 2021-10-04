import React from 'react';
import { Link } from 'react-router-dom';


class SerachItem extends React.Component {
      constructor(props) {
            super(props);
      }


      render() {
            return (
                  <li className="product_item">
                        <Link className="product_link" to={`/products/${this.props.product.id}`}>
                              <img src={this.props.product.photoUrl}></img>
                              <div className="item-details">
                                    <h1>{this.props.product.productName.split(" ").slice(0, 5).join(" ")}</h1>
                                    <div className="details-price">
                                          <p>$</p>
                                          <strong>{(this.props.product.productPrice * 1).toFixed(2)}</strong>
                                    </div>
                                   
                              </div>
                        </Link>
                  </li>
            )
      }
};

export default SerachItem;