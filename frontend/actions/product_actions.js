export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

import { fetchProducts, fetchProduct } from '../util/products_api_util';

const receiveAllProducts = (products) => ({
      type: RECEIVE_PRODUCTS,
      products
})

const receiveProduct = (product) => ({
      type: RECEIVE_PRODUCT,
      product
})

export const fetchProducts = () => dispatch => (
      fetchProducts().then(products => dispatch(receiveAllProducts(products)))
)

export const fetchProduct = (productId) => dispatch => (
      fetchProduct(productId).then(product => dispatch(receiveProduct(product)))
)