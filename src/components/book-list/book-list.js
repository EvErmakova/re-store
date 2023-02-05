import React, {Component} from "react";
import {connect} from "react-redux";
import './book-list.css';
import {booksLoaded} from "../../actions";
import {compose} from "../../utils";
import WithBookstoreService from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item";


export class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {books.map((book, index) => {
                    return (
                        <li key={`book${index}`}><BookListItem book={book} /></li>
                    );
                })}
            </ul>
        );
    }
};

const mapStateToProps = ({books}) => {
    return {books};
};

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, {booksLoaded})
)(BookList);
