import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import SearchResult  from "./result";


const mSTP = (state, ownProps) => {
      debugger
      return {
            
            products: Object.values(state.entities.products),
      }
      
}

const mDTP = dispatch => ({
      fetchProducts: (data) => dispatch(fetchProducts(data))
})

export default connect(mSTP, mDTP)(SearchResult);