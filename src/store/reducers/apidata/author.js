import * as types from "../../constants/ActionTypes"

let initialAuthorState = {
    authors : [],
    isFetching : true,
    error: {},
    page_count : 0
}

export default function authors(state=initialAuthorState, action)
{
    switch (action.type)
    {
        case types.GET_AUTHORS:
            return {
                ...state,
                authors : [],
                isFetching : true
            }
        case types.GET_AUTHORS_SUCCESS:
            console.log(action.payload.results)
            return {
                authors : [
                    ...action.payload.results
                ],
                isFetching : false,
                page_count : Math.round(action.payload.count / action.payload.results.length) 
            }
        case types.GET_AUTHORS_FAILURE:
            return {
                ...state,
                error : action.error,
                isFetching : false
            }
        default:
            return state
    }
}

