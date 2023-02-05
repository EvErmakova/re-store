import React, {Fragment} from "react";
import './app.css';
import {Route, Switch} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <Fragment>
            <ShopHeader numItems={2} total={20} />
            <main role="main" className="container">
                <Switch>
                    <Route path={'/'} exact component={HomePage} />
                    <Route path={'/books'} exact component={CardPage} />
                </Switch>
            </main>
        </Fragment>
    );
};

export default App;
