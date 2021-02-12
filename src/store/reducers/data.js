//import actions from "./actions.js"
import * as types from "../constants/ActionTypes"

let initialAPIState = {
    books : [],
    publishers : [],
    categories : [],
    authors : []
}

export default function data(state=initialAPIState, action)
{
    switch (action.type)
    {
        case types.GET_AUTHORS:
            return state
        case types.GET_BOOKS:
            return state
        case types.GET_CATEGORIES:
            return state
        case types.GET_PUBLISHERS:
            return state
        default:
            return state
    }
}

