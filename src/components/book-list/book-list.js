import React, {Component} from "react";
import {connect} from "react-redux";
import './book-list.css';
import {booksLoaded} from "../../actions";
import {compose} from "../../utils";
import WithBookstoreService from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";


export class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props;
        const data = bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;

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

const mapStateToProps = ({books, loading}) => {
    return {books, loading};
};

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, {booksLoaded})
)(BookList);
