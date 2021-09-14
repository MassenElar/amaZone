import { connect } from 'react-redux';
import { createReview} from '../../actions/review.actions';
import ReviewForm from './reviews_form';


const mapStateToProps = (state) => ({
      currentUser = state.session.id,
      formType: 'Create Review'
});

const mapDispatchToProps = dispatch => ({
      createReview: (review, productId) => dispatch(createReview(review, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);