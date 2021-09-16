import React from "react";
import ReviewIndexItem from "./review_index_item";
import { Link } from "react-router-dom";

class ReviewsIndex extends React.Component {
      constructor(props) {
            super(props)
      }
      componentDidMount() {
            this.props.fetchReviews(this.props.product.id)
      }

      componentDidUpdate() {
             
      }

      render() {
            if (!this.props.reviews) return null
            let addReview = <Link to={`/products/${this.props.product.id}/reviews/create`}><button id="review-submit-from" className="add-review-button">Write a customer review</button></Link> ;
            
            this.props.reviews.forEach(review => {
                  if (review && review.reviewerId === this.props.currentUser) {
                        
                        addReview = null
                  }
            });
            return (
                  <div>
                        <div>
                              <ul>
                                    {this.props.reviews.map((review) => (
                                          <ReviewIndexItem key={review.id} review={review} deleteReview={this.props.deleteReview} fetchReview={this.props.fetchReview}
                                                currentUser={this.props.currentUser}
                                          />
                                    ))}
                              </ul>
                              <div className="review-area">{addReview}</div>
                        </div>
                  </div>
            )
      }
}

export default ReviewsIndex;