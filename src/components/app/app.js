import React, {Fragment} from "react";
import './app.css';
import {Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <Fragment>
            <ShopHeader />
            <main role="main" className="container">
                <Switch>
                    <Route path={'/'} exact component={HomePage} />
                    <Route path={'/cart'} exact component={CartPage} />
                </Switch>
            </main>
        </Fragment>
    );
};

export default App;
