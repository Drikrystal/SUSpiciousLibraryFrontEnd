import * as types from "../../constants/ActionTypes"

export const addBookToCart = (response) => ({
    type: types.ADD_BOOK_TO_CART,
    payload: response
})

export const addBookToCartFailure = (error) => ({
    type: types.CART_ACTION_FAILURE,
    payload: null,
    error: error
})

export const decreaseBookAmount = () => ({
    type: types.DECREASE_BOOK_AMOUNT_IN_CART,
})

export const increaseBookAmount = () => ({
    type: types.INCREASE_BOOK_AMOUNT_IN_CART,
})