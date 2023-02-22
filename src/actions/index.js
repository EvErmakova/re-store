import {FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUESTED, FETCH_BOOKS_FAILURE} from "./action-types";

const booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUESTED,
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

export {fetchBooks, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUESTED, FETCH_BOOKS_FAILURE};
