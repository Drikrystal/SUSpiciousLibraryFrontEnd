import * as types from "../../constants/ActionTypes"

let initialCategoryState = {
    categories : [],
    isFetching : true,
    error: {},
    page_count : 0
}

export default function categories(state=initialCategoryState, action)
{
    switch (action.type)
    {
        case types.GET_CATEGORIES:
            return {
                ...state,
                categories : [],
                isFetching : true
            }
        case types.GET_CATEGORIES_SUCCESS:
            console.log(action.payload.results)
            return {
                categories : [
                    ...action.payload.results
                ],
                isFetching : false,
                page_count : Math.round(action.payload.count / action.payload.results.length) 
            }
        case types.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                error : action.error,
                isFetching : false
            }
        default:
            return state
    }
}

