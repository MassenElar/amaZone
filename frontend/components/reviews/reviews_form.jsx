import React from "react";
import ReactStars from "react-rating-stars-component";
import WelcomeContainer from '../welcome/welcome_container';
import FooterContainer from '../welcome/footer_container'

class ReviewForm extends React.Component {
      constructor(props) {
            super(props)
            this.state = this.props.review 
            this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleSubmit(e) {
            e.preventDefault();
            this.props.processForm(this.state, this.props.productId).then(() => this.props.history.push(`/products/${this.props.productId}`))
      }


      update(field) {
            return (e) => {
            if (field === "rating") {
                this.setState({ [field]: e });
            } else {
                this.setState({ [field]: e.target.value });
            }
        }
      }

      render() {
            return (
                  <div>
                        <WelcomeContainer/>
                        <div className="reviews">
                              <form className="reviews-form" onSubmit={this.handleSubmit}>
                                    <h1 id="review-title">{this.props.formType}</h1>
                                    <div className="review-form-rating">
                                          <label htmlFor="review-form-rating">Overall rating</label>
                                          <ReactStars
                                                count={5}
                                                value={0}
                                                onChange={this.update('rating')}
                                                size={24}
                                                activeColor="#ffd700"
                                                
                                          />
                                    </div>
                                    <div className="review-form-rating">
                                          <label htmlFor="review-form-title">Add a headline
                                          </label>
                                          <input className="input" id="review-form-title" type="text" value={this.state.title} onChange={this.update('title')}></input>
                                    </div>
                                    <div className="review-form-rating">
                                          <label htmlFor="review-form-body">Add a written review</label>
                                          <textarea
                                                className="textarea"
                                                id="review-form-body" cols="100" rows="10"
                                                value={this.state.body} onChange={this.update('body')}></textarea>
                                    </div>
                                    <div className="review-form-rating"><button id="review-submit-from" type="submit">{this.props.formType === 'Create Review' ? 'Submit Review' : 'Update Review'}</button> </div>
                              </form>
                        </div>
                        <FooterContainer/>
                  </div>
            )
      }
}
export default ReviewForm;