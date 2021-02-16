import * as types from "../../constants/ActionTypes"

let initialPublisherState = {
    publishers : [],
    isFetching : true,
    error: {},
    page_count : 0
}

export default function publisher(state=initialPublisherState, action)
{
    switch (action.type)
    {
        case types.GET_PUBLISHERS:
            return {
                ...state,
                publishers : [],
                isFetching : true
            }
        case types.GET_PUBLISHERS_SUCCESS:
            return {
                publishers : [
                    ...action.payload.results
                ],
                isFetching : false,
                page_count : Math.round(action.payload.count / action.payload.results.length),
                error : {}
            }
        case types.GET_PUBLISHERS_FAILURE:
            return {
                ...state,
                error : action.error,
                isFetching : false
            }
        default:
            return state
    }
}

