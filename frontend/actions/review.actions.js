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
    type: REMOVE_REVIEW,
    review
});

export const fetchReviews = (productId) => dispatch => (
      reviewsAPIUtil.fetchReviews(productId).then((reviews) => dispatch(receiveProdReviews(reviews)))
)

export const fetchReview = (reviewId, productId) => dispatch => (
      reviewsAPIUtil.fetchReview(reviewId, productId).then(review => dispatch(receiveReview(review)))
)

export const createReview = (review, productId) => dispatch => (
      reviewsAPIUtil.createReview(review, productId).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (review, productId) => dispatch => (
      reviewsAPIUtil.destroyReview(review, productId).then(review => dispatch(removeReview(review)))
)

export const updateReview = (review, productId) => dispatch => (
      reviewsAPIUtil.updateReview(review, productId).then(review => dispatch(receiveReview(review)))
)
