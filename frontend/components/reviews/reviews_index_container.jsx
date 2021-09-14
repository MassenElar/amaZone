import { connect } from "react-redux";
import   ReviewsIndex from "./reviews_index";
import { fetchReviews } from "../../actions/review.actions";


const mSTP = state => ({
      cartItems: Object.values(state.entities.reviews),
      currentUser: state.session.id 
})

const mDTP = dispatch => ({
      fetchReviews: (productId) => dispatch(fetchReviews(productId)),

})

export default connect(mSTP, mDTP)(ReviewsIndex);