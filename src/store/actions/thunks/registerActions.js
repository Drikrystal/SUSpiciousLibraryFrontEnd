import { API } from "../../../api";
import * as registerActions from "../actionCreators/registerActionCreators";

export function RegisterUser(user) {
    return function (dispatch) {
        dispatch(registerActions.register())
        API.register(user).then((response) => {
            dispatch(registerActions.registerSuccess(response))
        }).catch((err) => {
            let error = {
                "statusText": "Register Failed"
            }
            console.log(err)
            dispatch(registerActions.registerFailed(error))
        })
    }
}