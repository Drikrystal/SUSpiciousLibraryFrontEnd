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

export const deleteBookFromCart = (bookId) => ({
    type: types.DELETE_BOOK_FROM_CART,
    payload: {
        id : bookId
    }
})
