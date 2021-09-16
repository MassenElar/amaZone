import { connect } from 'react-redux';
import { createReview} from '../../actions/review.actions';
import ReviewForm from './reviews_form';


const mSTP = (state, ownProps) => ({
      review: {
            title: '',
            body: '',
            rating: 5,
            product_id: ownProps.match.params.productId,
            reviewer_id: state.session.id
      },
      productId: ownProps.match.params.productId, 
      currentUser: state.session.id,
      formType: 'Create Review'
});

const mDTP = dispatch => ({
      processForm: (review, productId) => dispatch(createReview(review, productId))
});

export default connect(mSTP, mDTP)(ReviewForm);