//import actions from "./actions.js"
import * as types from "../constants/ActionTypes"

let initialCartState = {
    items : [],
    total : 0,
    amount : 0
}

export default function cart(state=initialCartState, action)
{
    switch (action.type)
    {
        case types.ADD_BOOK_TO_CART:
            return state
        case types.DELETE_BOOK_FROM_CART:
            return state
        default:
            return state
    }
}

