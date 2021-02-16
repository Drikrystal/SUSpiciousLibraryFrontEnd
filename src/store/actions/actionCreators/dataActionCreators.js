import * as types from "../../constants/ActionTypes"

// Book Actions
export const getBooksSuccess = (response) => ({
    type: types.GET_BOOKS_SUCCESS,
    payload: response.data
})

export const getBooksFailure = (error) => ({
    type: types.GET_BOOKS_FAILURE,
    payload: null,
    error: error
})

export const getBooks = () => ({
    type: types.GET_BOOKS,
})

//Book Actions end

// Author Actions
export const getAuthorsSuccess = (response) => ({
    type: types.GET_AUTHORS_SUCCESS,
    payload: response.data
})

export const getAuthorsFailure = (error) => ({
    type: types.GET_AUTHORS_FAILURE,
    payload: null,
    error: error
})

export const getAuthors = () => ({
    type: types.GET_AUTHORS,
})
// Author Actions End

// Publisher Actions

export const getPublishersSuccess = (response) => ({
    type: types.GET_PUBLISHERS_SUCCESS,
    payload: response.data
})

export const getPublishersFailure = (error) => ({
    type: types.GET_PUBLISHERS_FAILURE,
    payload: null,
    error: error
})

export const getPublishers = () => ({
    type: types.GET_PUBLISHERS,
})
// Publisher Actions End

// Categories Actions

export const getCategoriesSuccess = (response) => ({
    type: types.GET_CATEGORIES_SUCCESS,
    payload: response.data
})

export const getCategoriesFailure = (error) => ({
    type: types.GET_CATEGORIES_FAILURE,
    payload: null,
    error: error
})

export const getCategories = () => ({
    type: types.GET_CATEGORIES,
})
// Categories Actions End