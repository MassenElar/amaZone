import React from 'react';
import { Link } from 'react-router-dom';


class ProductShow extends React.Component {
      componentDidMount() {
            this.props.fetchProduct(this.props.match.params.productId)
      }

      render() {
            const { product } = this.props
            return (
                  <div>
                        <p>{product.productName}</p>
                        <p>{product.productDescription}</p>
                        <p>{product.productInventory}</p>
                        <p>{product.productPrice}</p>
                  </div>
            )
      }
}

export default ProductShow;