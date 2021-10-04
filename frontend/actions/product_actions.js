export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

import * as ProductApiUtil from '../util/products_api_util';

const receiveAllProducts = (products) => ({
      type: RECEIVE_PRODUCTS,
      products
})

const receiveProduct = (product) => ({
      type: RECEIVE_PRODUCT,
      product
})

export const fetchProducts = (data) => dispatch => (
      ProductApiUtil.fetchProducts(data).then(products => dispatch(receiveAllProducts(products)))
)

export const fetchProduct = (productId) => dispatch => (
      ProductApiUtil.fetchProduct(productId).then(product => dispatch(receiveProduct(product)))
)