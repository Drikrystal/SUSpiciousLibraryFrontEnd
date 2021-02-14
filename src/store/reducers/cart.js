import { toast } from "react-toastify"
import * as types from "../constants/ActionTypes"

let initialCartState = {
    items : [],
    total_amount : 0, 
    total_price : 0,
    error : {},
}

export default function cart(state=initialCartState, action)
{
    switch (action.type)
    {
        case types.ADD_BOOK_TO_CART:
            toast.success(action.payload.detail)
            return state
            
        case types.DELETE_BOOK_FROM_CART:
            toast.success(action.payload.detail)
            return state

        case types.CART_ACTION_FAILURE:
            toast.error(action.error.statusText)
            return {
                ...state,
                error : action.error
            }

        case types.GET_CART_SUCCESS:
            let amount_arr = action.payload.items.map((key) => {return key.amount})
            return {
                ...state,
                items : action.payload.items,
                total : action.payload.total,
                total_amount : amount_arr.length > 0 ? amount_arr.reduce((a,b) => a+b) : 0
            }
        case types.CLEAR_CART:
            return initialCartState
            
        default:
            return state
    }
}

