import React, {Component} from "react";
import './app.css';
import ErrorBoundry from "../error-boundry";
import {BookstoreServiceProvider} from "../bookstore-service-context";
import BookstoreService from "../../services/bookstore-service";

export default class App extends Component {
    state = {
        books: new BookstoreService()
    };

    render() {
        const books = this.state.books;
        return (
            <ErrorBoundry>
                <BookstoreServiceProvider value={books}>
                    <div>App</div>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        );
    }
}
