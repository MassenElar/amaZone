import React from "react";
import { Route } from "react-router-dom";
import  homeImage  from '../../../app/assets/images/nav.jpg'
import WelcomeContainer from "../welcome/welcome_container";
import FooterContainer from "../welcome/footer_container";
import SearchItem from "./result_items"




class SearchResult extends React.Component {
      constructor(props) {
            super(props)
      }
      
      // componentDidMount() {
      //       
      //       // this.props.fetchProducts()
      // }

      render() {
            return (
                  
                  <div>
                        <header><WelcomeContainer/></header>
                        <div className="main-page">
                              <div className="main-container">
                                    <img className="image" src={window.bannerURL}></img>
                        
                                    <div className="">
                                          <ul className="product-result">
                                                {this.props.products.length !== 0 ? this.props.products.map((product) => (
                                                      <SearchItem key={product.id} product={product} /> 
                                                )) :<div className="warning-search"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i><p className="empty-search"> No Items Found...</p></div>}
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <FooterContainer/>
                  </div>
            )
      }
}

export default SearchResult;