import React from "react";
import ProductIndexItem from "./product_index_item";
import { Route } from "react-router-dom";



class ProductIndex extends React.Component {
      constructor(props) {
            super(props)
      }
      
      componentDidMount() {
            this.props.fetchProducts()
      }

      render() {
            return (<ul>
                        {this.props.products.map((product) => (
                              <ProductIndexItem key={product.id} product={product}/>
                        ))}
                  </ul>)
      }
}

export default ProductIndex;