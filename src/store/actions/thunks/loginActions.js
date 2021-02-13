import { API } from "../../../api";
import * as loginActions from "../actionCreators/loginActionCreators";

export function LoginUser(username, password) {
    return function (dispatch, getState) {
        if (!getState().session.token){
            // is there isn't a token, login
            API.login(username, password).then((response) => {
                dispatch(loginActions.loginSuccess(response))
            }).catch((error) => {
                dispatch(loginActions.loginFailed(error))
            })
        } else {
            // if there is a saved token in the state,
            // check it's validity, if it is valid do nothing, otherwise login
            API.get_current_user(getState().session.token).then((response) => {
                let error = {
                    "statusText" : "Already logged in"
                }
                dispatch(loginActions.loginFailed(error))
            }).catch((err) => {
                // if the get_current_user fails, this means token is invalid,
                // try to log in and get a valid token
                API.login(username, password).then((response) => {
                    dispatch(loginActions.loginSuccess(response))
                }).catch((error) => {
                    dispatch(loginActions.loginFailed(error))
                })
            })
        }
    }
}
