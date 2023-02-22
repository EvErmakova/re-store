import {FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUESTED, FETCH_BOOKS_FAILURE, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART} from "./action-types";

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

const bookAddedToCart = (bookId) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId
    }
}

const bookRemoveFromCart = (bookId) => {
    return {
        type: BOOK_REMOVED_FROM_CART,
        payload: bookId
    }
}

const allBooksRemoveFromCart = (bookId) => {
    return {
        type: ALL_BOOKS_REMOVED_FROM_CART,
        payload: bookId
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

export {fetchBooks, bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUESTED, FETCH_BOOKS_FAILURE, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART};
