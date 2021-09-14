import * as reviewsAPIUtil from '../util/reviews_api_util'
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


export const receiveProdReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const fetchReviews = (productId) => dispatch => (
      reviewsAPIUtil.fetchReviews(productId).then(reviews => dispatch(receiveProdReviews(reviews)))
)

export const fetchReview = (reviewId) => dispatch => (
      reviewsAPIUtil.fetchReview(reviewId).then(review=> dispatch(receiveReview(review)))
)

export const createReview = (review, productId) => dispatch => (
      reviewsAPIUtil.createReview(review, productId).then(review => dispatch(receiveReview(review)))
)

export const deleteCartItem = (review, productId) => dispatch => (
      reviewsAPIUtil.destroyReview(review, productId).then(review => dispatch(removeReview(review)))
)

export const updateReview = (review, productId) => dispatch => (
      reviewsAPIUtil.updateReview(review, productId).then(review => dispatch(receiveReview(review)))
)
