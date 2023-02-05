import React from "react";
import './app.css';
import {Route, Switch} from "react-router-dom";
import {CardPage, HomePage} from "../pages";

const App = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={HomePage} />
            <Route path={'/books'} exact component={CardPage} />
        </Switch>
    );
};

export default App;
