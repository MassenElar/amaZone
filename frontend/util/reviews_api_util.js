export const fetchReviews = (productId) => (
      $.ajax({
            method: "GET",
            url: `/api/products/${productId}/reviews`
      })
)

export const fetchReview = (reviewId, productId) => (
      $.ajax({
            method: "GET",
            url: `/api/products/${productId}/reviews/${reviewId}`,
      })   
)

export const createReview = (review, productId) => (
      $.ajax({
            url: `/api/products/${productId}/reviews`,
            method: "POST",
            data: {review}
      })   
)

export const updateReview = (review, productId) => (
      $.ajax({
            url: `/api/products/${productId}/reviews/${review.id}`,
            method: "PATCH",
            data: {review}
      })   
)

export const destroyReview = (review, productId) => (
  $.ajax({
            method: 'DELETE',
            url: `/api/products/${productId}/reviews/${review.id}`,
  })
);