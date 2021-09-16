import { connect } from "react-redux";
import   ReviewsIndex from "./reviews_index";
import { fetchReviews, deleteReview, fetchReview } from "../../actions/review.actions";



const mSTP = (state, ownProps) => ({
      reviews: Object.values(state.entities.reviews),
      currentUser: state.session.id
})

const mDTP = dispatch => ({
      fetchReviews: (productId) => dispatch(fetchReviews(productId)),
      deleteReview: (review, productId) => dispatch(deleteReview(review, productId)),
      

})

export default connect(mSTP, mDTP)(ReviewsIndex);