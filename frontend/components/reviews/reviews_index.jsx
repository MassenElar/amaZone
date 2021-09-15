import React from "react";
import ReviewIndexItem from "./review_index_item";


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
           
            return (
                  <div>
                        <div>
                              <ul>
                                    {this.props.reviews.map((review) => (
                                          <ReviewIndexItem key={review.id} review={review} deleteReview={this.props.deleteReview} fetchReview={this.props.fetchReview }/>
                                    ))}
                              </ul>
                        </div>
                  </div>
            )
      }
}

export default ReviewsIndex;