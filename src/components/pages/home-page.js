import React, {Fragment} from "react";
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

const homePage = () => {
    return (
        <Fragment>
            <BookList />
            <ShoppingCartTable />
        </Fragment>
    );
}

export default homePage;
