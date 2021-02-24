//import actions from "./actions.js"
import { toast } from "react-toastify"
import * as types from "../constants/ActionTypes"

let initialSessionState = {
    token : null,
    isLogging : false,
    isLoggedIn : false,
    loginError : {},
    registerError : {}
}

export default function session(state=initialSessionState, action)
{
    switch (action.type)
    {
        case types.LOGIN_USER: 
        case types.REGISTER_USER:
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
                isLogging : false,
                isLoggedIn : false,
                loginError : action.error
            }
        case types.LOGOUT_USER:
            toast.success("Logged out Successfully")
            return {
                ...state,
                token : null,
                isLoggedIn : false
            }
        case types.REGISTER_SUCCESSFUL:
            toast.success("Registered Successfully")
            return {
                ...state,
                token : action.payload.token,
                isLogging : false,
                isLoggedIn : true
            }
        case types.REGISTER_FAILED:
            toast.warn("Registration Failed")
            return {
                ...state,
                token : null,
                isLoggedIn : false,
                isLogging: false,
                registerError : action.error
            }
        default:
            return state
    }
}

