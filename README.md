# README
## amaZone
amaZone is an E-commerce webiste inspired and clone based on Amazon that allows customers to purchase  electronics such as Smart Phones, Smart Tvs and so on, costumers will be allowed to add items to the cart, review and search any product.

[Live Site](https://amazone2.herokuapp.com/#/)

## Technologies Used 

* Ruby on Rails 
* React JS
* Redux
* Postgres SQL
* AWS
* Heroku 

## Features and MVP list
In this clone i have implemented two CRUD functionalities, shopping cart and Reviews
### Authentication
* Users can create and login to thier accounts 

![](app/assets/images/gifAuth.gif)

### Product 
* Each product has its own show page where users can see the product details, reviews and also the ability to add to cart

![](app/assets/images/gifProduct.gif) 

### Cart  
* Customers will be able to add and delete any item when they are logged in 

![](app/assets/images/gifCart.gif)

### Reviews  
* customers will be able to review any item and giving it a rating, all customers can see other customers reviews, but they are only allowed to delete or update thier own reviews

![](app/assets/images/gifReviews.gif) 

### Search 
* users will be able to search any item by queyring on the backend to make the app lightweight and faster  

![](app/assets/images/gifSearch1.gif)

## Key Feature  
Update Reviews was one of my favorite part of this project, in order to make my code clean i used one form for both create and update, but i was having a problem with the update, it wasn't updating the review, going through a debugger waterfall i figured out that i was't passing the right props form the update container to the form. keep in mind to always check your props and see if you are passing the right ones!!!  

```javascript
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
                                                value={1}
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
```   


```javascript
class EditReviewForm extends React.Component {
  componentDidMount() {
        this.props.fetchReview(this.props.match.params.reviewId, this.props.productId)
  }
  render () {
    
    const { review, formType, processForm, productId } = this.props;
      
        if (!review) return null;
      
        return (
          
              <ReviewForm {...this.props}/>
      
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
```
