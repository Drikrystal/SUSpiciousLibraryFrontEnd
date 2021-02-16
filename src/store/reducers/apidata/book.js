import * as types from "../../constants/ActionTypes"

let initialBookState = {
    books : [],
    isFetching : true,
    error: {},
    page_count : 0
}

export default function books(state=initialBookState, action)
{
    switch (action.type)
    {
        case types.GET_BOOKS:
            return {
                ...state,
                books : [],
                isFetching : true
            }
        case types.GET_BOOKS_SUCCESS:
            return {
                books : [
                    ...action.payload.results
                ],
                isFetching : false,
                page_count : Math.round(action.payload.count / action.payload.results.length) 
            }
        case types.GET_BOOKS_FAILURE:
            return {
                ...state,
                error : action.error,
                isFetching : false
            }
        default:
            return state
    }
}

