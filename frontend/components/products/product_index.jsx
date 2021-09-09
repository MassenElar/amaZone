import React from "react";
import ProductIndexItem from "./product_index_item";
import { Route } from "react-router-dom";
import  homeImage  from '../../../app/assets/images/nav.jpg'
import WelcomeContainer from "../welcome/welcome_container";



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
                        <header><WelcomeContainer/></header>
                        <div className="main-page">
                              <div className="main-container">
                                    <img className="image" src={homeImage}></img>
                        
                                    <ul className="product-ul">
                                          {this.props.products.map((product) => (
                                                <ProductIndexItem key={product.id} product={product}/>
                                          ))}
                                    </ul>
                                    {/* <ul className="product-ul">
                                          {this.props.products.map((product) => (
                                                <ProductIndexItem key={product.id} product={product}/>
                                          ))}
                                    </ul> */}
                              </div>
                        </div>
                  </div>
            )
      }
}

export default ProductIndex;