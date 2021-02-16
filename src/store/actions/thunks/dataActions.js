import { API } from "../../../api";
import * as dataActions from "../actionCreators/dataActionCreators";

export function fetchBooks() {
    return function (dispatch) {
        dispatch(dataActions.getBooks())
        API.instance.get("book").then((response) => {
            dispatch(dataActions.getBooksSuccess(response));
        }).catch((error) => {
            dispatch(dataActions.getBooksFailure(error))
        })
    }
}

export function fetchAuthors() {
    return function (dispatch) {
        dispatch(dataActions.getAuthors())
        API.instance.get("author").then((response) => {
            dispatch(dataActions.getAuthorsSuccess(response));
        }).catch((error) => {
            dispatch(dataActions.getAuthorsFailure(error))
        })
    }
}

export function fetchPublishers() {
    return function (dispatch) {
        dispatch(dataActions.getPublishers())
        API.instance.get("publisher").then((response) => {
            dispatch(dataActions.getPublishersSuccess(response));
        }).catch((error) => {
            dispatch(dataActions.getPublishersFailure(error))
        })
    }
}

export function fetchCategories() {
    return function (dispatch) {
        dispatch(dataActions.getCategories())
        API.instance.get("category").then((response) => {
            dispatch(dataActions.getCategoriesSuccess(response));
        }).catch((error) => {
            dispatch(dataActions.getCategoriesFailure(error))
        })
    }
}

