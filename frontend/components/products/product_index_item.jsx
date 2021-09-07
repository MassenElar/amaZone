import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
      constructor(props) {
            super(props);
      }


      render() {
            return (
                  <li>
                        <Link to={`/Products/${this.props.product.id}`}>
                              <h1>{this.props.product.productName}</h1>
                              <p>{this.props.product.productDescription}</p>
                              <p>{this.props.product.productName}</p>
                              <p>{this.props.product.productInventory}</p>
                              <p>{this.props.product.productPrice}</p>
                        </Link>
                  </li>
            )
      }
};

export default ProductIndexItem;