import { API } from "../../../api";
import * as registerActions from "../actionCreators/registerActionCreators";

export function RegisterUser(user) {
    return function (dispatch) {
        dispatch(registerActions.register())
        API.register(user).then((response) => {
            dispatch(registerActions.registerSuccess(response))
        }).catch((err) => {
            dispatch(registerActions.registerFailed(err.response.data))
        })
    }
}