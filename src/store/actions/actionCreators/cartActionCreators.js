import * as types from "../../constants/ActionTypes"

export const addBookToCart = (detail) => ({
    type: types.ADD_BOOK_TO_CART,
    payload :{
        detail : detail
    }
})

export const cartActionFailure = (error) => ({
    type: types.CART_ACTION_FAILURE,
    payload: null,
    error: error
})

export const deleteBookFromCart = (detail) => ({
    type: types.DELETE_BOOK_FROM_CART,
    payload :{
        detail : detail
    }
})

export const fetchCart = () => ({
    type: types.GET_CART,
})

export const fetchCartSuccess = (data) => ({
    type: types.GET_CART_SUCCESS,
    payload: {
        items : data.items,
        total : data.total_price        
    }
})

export const clearCart = () => ({
    type: types.CLEAR_CART
})