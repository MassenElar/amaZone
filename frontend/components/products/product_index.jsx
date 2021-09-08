import React from "react";
import ProductIndexItem from "./product_index_item";
import { Route } from "react-router-dom";
import  homeImage  from '../../../app/assets/images/nav.jpg'



class ProductIndex extends React.Component {
      constructor(props) {
            super(props)
      }
      
      componentDidMount() {
            this.props.fetchProducts()
      }

      render() {
            return (
                  <div>
                        <div className="home-image">
                              <img className="image" src={homeImage}></img>
                        </div>
                        <ul className="product-ul">
                              {this.props.products.map((product) => (
                                    <ProductIndexItem key={product.id} product={product}/>
                              ))}
                        </ul>
                  </div>
            )
      }
}

export default ProductIndex;