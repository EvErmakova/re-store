import React, {Component} from "react";
import {connect} from "react-redux";
import './book-list.css';
import {booksError, booksLoaded, booksRequested} from "../../actions";
import {compose} from "../../utils";
import WithBookstoreService from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


export class BookList extends Component {

    componentDidMount() {
        const {
            bookstoreService,
            booksLoaded,
            booksRequested,
            booksError
        } = this.props;
        booksRequested();
        const data = bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;

        if (error) {
            return <ErrorIndicator />;
        }

        if (loading) {
            return <Spinner />;
        }

        return (
            <ul className="book-list">
                {books.map((book, index) => {
                    return (
                        <li key={`book${index}`}><BookListItem book={book} /></li>
                    );
                })}
            </ul>
        );
    }
};

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
