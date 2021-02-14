import * as types from "../../constants/ActionTypes"

export const login = () => ({
    type: types.LOGIN_USER
})

export const loginSuccess = (response) => ({
    type: types.LOGIN_SUCCESSFUL,
    payload: response.data
})

export const loginFailed = (error) => ({
    type : types.LOGIN_FAILED,
    payload: null,
    error : error
})

export const logoutUser = () => ({
    type : types.LOGOUT_USER,
})