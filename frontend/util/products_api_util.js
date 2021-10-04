export const fetchProducts = (word) => (
      $.ajax({
            url: `/api/products`,
            method: "GET",
            data: { word: word }
      })   
)
export const fetchProduct = (productId) => (
      $.ajax({
            url: `/api/products/${productId}`,
            method: "GET"
      })   
)