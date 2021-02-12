import { combineReducers } from 'redux'
import cart from './cart'
import session from "./login";
import data from "./data"

export default combineReducers({
    cart,
    session,
    data
})