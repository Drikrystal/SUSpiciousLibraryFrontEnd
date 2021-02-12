//import actions from "./actions.js"
import * as types from "../constants/ActionTypes"

let initialSessionState = {
    token : null
}

export default function session(state=initialSessionState, action)
{
    switch (action.type)
    {
        case types.LOGIN_USER:
            return state
        case types.LOGOUT_USER:
            return state
        default:
            return state
    }
}

