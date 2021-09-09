import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';


class ProductShow extends React.Component {
      componentDidMount() {
            this.props.fetchProduct(this.props.match.params.productId)
      }

      render() {
            const { product } = this.props
            return (
                  <div>
                        <header><WelcomeContainer/></header>
                        <div>
                              <p>{product.productName}</p>
                              <p>{product.productDescription}</p>
                              <p>{product.productInventory}</p>
                              <p>{product.productPrice}</p>
                        </div>
                  </div>
            )
      }
}

export default ProductShow;