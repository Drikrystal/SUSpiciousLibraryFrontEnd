import * as types from "../../constants/ActionTypes"

export const register = () => ({
    type: types.REGISTER_USER
})

export const registerSuccess = (response) => ({
    type: types.REGISTER_SUCCESSFUL,
    payload: response.data
})

export const registerFailed = (error) => ({
    type : types.REGISTER_FAILED,
    payload: null,
    error : error
})
