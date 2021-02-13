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
                ...state,
                items: [
                    ...state.items,
                    action.payload.item
                ],
                total : (Number(state.total) + Number(action.payload.item.price)).toFixed(2),
                amount : state.amount + 1
            }
        case types.CART_ACTION_FAILURE:
            toast.error(action.error.statusText)
            return {
                ...state,
                error : action.error
            }
        case types.DELETE_BOOK_FROM_CART:
            let itemToDel = state.items.find(book => book.id === action.payload.id)
            let itemToDelAmount = state.items.filter(book => book.id === action.payload.id).length
            console.log(itemToDelAmount)
            return {
                ...state, 
                items : state.items.filter(book => book.id !== action.payload.id),
                total : (Number(state.total) - Number(itemToDel.price * itemToDelAmount)).toFixed(2),
                amount : state.amount - itemToDelAmount
            }
        default:
            return state
    }
}

