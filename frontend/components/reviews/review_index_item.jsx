import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReactStars from "react-rating-stars-component";



class ReviewIndexItem extends React.Component {
      constructor(props) {
            super(props);
      }

      render() {
            let updateReview;
            let deleteReview;
            if (!this.props.review) return null
            if (this.props.currentUser === this.props.review.reviewerId) {
                  updateReview = <Link to={`/products/${this.props.review.productId}/reviews/${this.props.review.id}/update`}><button className="update-review free-return">Update Review</button></Link>;
                  deleteReview = <button onClick={() => this.props.deleteReview(this.props.review, this.props.review.productId)}>Delete Review</button>
            } else {
                  updateReview = null;
                  deleteReview = null;
            }
            return (
                  <div className="reviews-show">
                        <div className="profil-review">
                              <AccountCircleIcon style={{ fontSize: 70 }} className="avatar"/>
                              <p>{this.props.review.username }</p>
                        </div>
                        <div className="rating-display">
                              <ReactStars count={5} value={this.props.review.rating} size={20} edit={false} isHalf={true} activeColor="#ffd700" />
                              <p>{this.props.review.title}</p>
                        </div>
                        <textarea readOnly>{this.props.review.body}</textarea>
                        <div className="review-button">
                              {updateReview}
                              {deleteReview}
                        </div>
                  </div>
            )
      }
}

export default ReviewIndexItem