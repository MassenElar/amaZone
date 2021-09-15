import React from 'react';
import { Link } from 'react-router-dom';



class ReviewIndexItem extends React.Component {
      constructor(props) {
            super(props);
      }

      render() {
            if (!this.props.review) return null 
            return (
                  <div>
                        <p>{this.props.review.title}</p>
                        <p>{this.props.review.rating }</p>
                        <p>{this.props.review.body}</p>
                        <p>{this.props.review.productId}</p>
                        <Link to={`/products/${this.props.review.productId}/reviews/${this.props.review.id}/update`}><button>Update Review</button></Link>
                        <button onClick={() => this.props.deleteReview(this.props.review, this.props.review.productId)}>Delete Review</button>
                  </div>
            )
      }
}

export default ReviewIndexItem