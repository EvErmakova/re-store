import {FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUESTED} from "../actions";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'Book 1',
            count: 1,
            total: 50
        },
        {
            id: 2,
            name: 'Book 2',
            count: 2,
            total: 80
        }
    ],
    orderTotal: 130
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUESTED:
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
