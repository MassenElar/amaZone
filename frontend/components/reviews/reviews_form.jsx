import React from "react";

class ReviewForm extends React.Component {
      constructor(props) {
            this.state = {
                  title: '',
                  body: '',
                  rating: 5,
                  product_id: this.props.product.id, 
                  reviewer_id: this.props.currentUser
            }
      }
}