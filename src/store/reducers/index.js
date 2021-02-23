import { combineReducers } from 'redux'
import cart from './cart'
import session from "./session";
import author from "./apidata/author"
import publisher from "./apidata/publisher"
import category from "./apidata/category"
import book from "./apidata/book"

export default combineReducers({
    cart,
    session,
    book,
    author,
    publisher,
    category
})