import React from "react";

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
            return e => this.setState({[field]: e.currentTarget.value});
      }

      render() {
            return (
                  <div>
                        <form onSubmit={this.handleSubmit}>
                              <h1>{this.props.formType}</h1>
                              <label>Title
                                    <input type="text" value={this.state.title} onChange={this.update('title')}></input>
                              </label>
                              <label>Rating
                                    <input type="number" value={this.state.rating} onChange={this.update('rating')}></input>
                              </label>
                              <label>Body
                                    <textarea cols="60" rows="20"  value={this.state.body} onChange={this.update('body')}></textarea>
                              </label>
                              <button type="submit">{this.props.formType === 'Create Review' ? 'Submit Review' : 'Update Review'}</button>
                        </form>
                  </div>
            )
      }
}
export default ReviewForm;