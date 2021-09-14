import { connect } from 'react-redux';
import { updateReview } from '../../actions/review.actions';
import ReviewForm from './reviews_form';


const mapStateToProps = (state) => ({
      currentUser = state.session.id,
      formType: 'Update Review'
});

const mapDispatchToProps = dispatch => ({
      updateReview: (review, productId) => dispatch(updateReview(review, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);