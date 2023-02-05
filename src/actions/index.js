import {BOOKS_LOADED} from "./action-types";

const booksLoaded = (newBooks) => {
    return {
        type: BOOKS_LOADED,
        payload: newBooks
    }
};

export {booksLoaded};
