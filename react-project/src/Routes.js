import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";

export default () =>
    <Switch>
        <Route path="/" exact component={Login} />
    </Switch>;