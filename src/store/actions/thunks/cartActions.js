import { API } from "../../../api";
import * as cartActions from "../actionCreators/cartActionCreators";

export function AddBookToCart(bookId) {
    return function (dispatch, getState) {
        if (!getState().session.token){
            // errors should be structured like the axios ones,
            // this is to make sure toasts are created correctly in dispatchers
            let error = { statusText : "Please Login"}
            dispatch(cartActions.cartActionFailure(error))
        } else {
            API.add_book_to_cart(getState().session.token, bookId).then((response) => {
                dispatch(cartActions.addBookToCart(response.detail))
                dispatch(FetchCart());
            }).catch((err) => {
                let error = { statusText : err.response.detail}
                dispatch(cartActions.cartActionFailure(error))
            })
        }
    }
}
export function RemoveBookFromCart(bookId, removeAmount=1) {
    return function (dispatch, getState) {
        if (!getState().session.token){
            // errors should be structured like the axios ones,
            // this is to make sure toasts are created correctly in dispatchers
            let error = { statusText : "Please Login"}
            dispatch(cartActions.cartActionFailure(error))
        } else {
            API.remove_book_from_cart(getState().session.token, bookId, removeAmount).then((response) => {
                dispatch(cartActions.deleteBookFromCart(response.detail))
                dispatch(FetchCart());
            }).catch((err) => {
                let error = { statusText : err.response.data.detail}
                dispatch(cartActions.cartActionFailure(error))
            })
        }
    }
}

export function FetchCart() {
    return function (dispatch, getState) {
        if (!getState().session.token){
            // errors should be structured like the axios ones,
            // this is to make sure toasts are created correctly in reducers
            let error = { statusText : "Please Login"}
            dispatch(cartActions.cartActionFailure(error))
        } else {
            API.get_cart(getState().session.token).then((response) => {
                dispatch(cartActions.fetchCartSuccess(response)); 
            }).catch((err) => {
                let error = { statusText : err.response.data.detail}
                dispatch(cartActions.cartActionFailure(error))
            })
        }
    }
}

export function ClearCart() {
    return function (dispatch, getState) {
        if (!getState().session.token){
            dispatch(cartActions.clearCart())
        } else {
            API.clear_cart(getState().session.token).then((response) => {
                dispatch(cartActions.clearCart(response)); 
            }).catch((err) => {
                let error = { statusText : err.response.data.detail}
                dispatch(cartActions.cartActionFailure(error))
            })
        }
    }
}
