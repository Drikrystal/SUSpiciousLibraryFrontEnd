import { toast } from "react-toastify"
import * as types from "../constants/ActionTypes"

let initialCartState = {
    items : [],
    total : 0,
    amount : 0,
    error : {},
}

export default function cart(state=initialCartState, action)
{
    switch (action.type)
    {
        case types.ADD_BOOK_TO_CART:
            toast.success(action.payload.detail)
            return {
                ...state
            }
        case types.CART_ACTION_FAILURE:
            toast.error(action.error.statusText)
            return {
                ...state,
                error : action.error
            }
        case types.DELETE_BOOK_FROM_CART:
            return {
                ...state, 
                items : state.items.filter((book) => book.id !== action.payload.id)
            }
        
        case types.INCREASE_BOOK_AMOUNT_IN_CART:
            return {
                ...state,
            }
        case types.DECREASE_BOOK_AMOUNT_IN_CART:
            return {
                ...state
            }
        default:
            return state
    }
}

