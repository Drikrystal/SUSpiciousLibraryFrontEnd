import { API } from "../../../api";
import * as cartActions from "../actionCreators/cartActionCreators";

export function AddBookToCart(bookId) {
    return function (dispatch, getState) {
        if (!getState().session.token){
            // errors should be structured like the axios ones,
            // this is to make sure toasts are created correctly in dispatchers
            let error = { statusText : "Please Login"}
            dispatch(cartActions.addBookToCartFailure(error))
        } else {
            API.add_book_to_cart(getState().session.token, bookId).then((response) => {
                dispatch(cartActions.addBookToCart(response));
            }).catch((err) => {
                let error = { statusText : err.response.data.detail}
                dispatch(cartActions.addBookToCartFailure(error))
            })
        }
    }
}
export function RemoveBookFromCart(bookId) {
    return function (dispatch, getState) {
        if (!getState().session.token){
            // errors should be structured like the axios ones,
            // this is to make sure toasts are created correctly in dispatchers
            let error = { statusText : "Please Login"}
            dispatch(cartActions.addBookToCartFailure(error))
        } else {
            API.remove_book_from_cart(getState().session.token, bookId, 200).then(() => {
                dispatch(cartActions.deleteBookFromCart(bookId));
            }).catch((err) => {
                console.log(err.response)
                let error = { statusText : err.response.data.detail}
                dispatch(cartActions.addBookToCartFailure(error))
            })
        }
    }
}
