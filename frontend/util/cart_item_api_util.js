export const fetchCartItems = () => (
      $.ajax({
            method: "GET",
            url: '/api/cart_items'
      })
)

export const fetchCartItem = (cartItemId) => (
      $.ajax({
            url: `/api/cart_items/${cartItemId}`,
            method: "GET"
      })   
)

export const createCartItem = (cartItem) => (
      $.ajax({
            url: `/api/cart_items`,
            method: "POST",
            data: {cartItem}
      })   
)

export const destroyCartItem = (cartItem) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${cartItem.id}`
  })
);