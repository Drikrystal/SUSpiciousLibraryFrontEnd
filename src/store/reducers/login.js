//import actions from "./actions.js"
import { toast } from "react-toastify"
import * as types from "../constants/ActionTypes"

let initialSessionState = {
    token : null,
    isLogging : false,
    isLoggedIn : false,
    error : {}
}

export default function session(state=initialSessionState, action)
{
    switch (action.type)
    {
        case types.LOGIN_USER:
            return {
                ...state,
                isLogging : true
            }
        case types.LOGIN_SUCCESSFUL:
            toast.success("Login Successful")
            return {
                ...state,
                token : action.payload.token,
                isLogging : false,
                isLoggedIn : true
            }
        case types.LOGIN_FAILED:
            toast.warn(action.error.statusText)
            return {
                ...state,
                token : null,
                isLoggedIn : false,
                error: action.error
            }
        case types.LOGOUT_USER:
            toast.success("Logged out Successfully")
            return {
                ...state,
                token : null,
                isLoggedIn : false
            }
        default:
            return state
    }
}

