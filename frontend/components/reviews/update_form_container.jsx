import React from 'react';
import { connect } from 'react-redux';
import { updateReview, fetchReview } from '../../actions/review.actions';
import ReviewForm from './reviews_form';
import ReviewEditForm from './review_update_form'
import { withRouter } from 'react-router';


class EditReviewForm extends React.Component {
  componentDidMount() {
        this.props.fetchReview(this.props.match.params.reviewId, this.props.productId)
  }
  render () {
    
    const { review, formType, processForm, productId } = this.props;
      
        if (!review) return null;
      
        return (
          
              <ReviewForm {...this.props}/>
      // <ReviewForm
      //   review={review}
      //   formType={formType}
      //   processForm={processForm}
      //   productId={productId} />
    );
  }
}




const mSTP = (state, ownProps) => {
      
     return {
      review: state.entities.reviews[ownProps.match.params.reviewId],
      productId: ownProps.match.params.productId, 
      currentUser: state.session.id,
      formType: 'Update Review'
      }
};

const mDTP = dispatch => {
      
      return {
            fetchReview: (reviewId, productId) => dispatch(fetchReview(reviewId, productId)),
            processForm: (review, productId) => dispatch(updateReview(review, productId))
      }
};

export default withRouter(connect(mSTP, mDTP)(EditReviewForm));