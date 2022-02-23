import { Route, Switch } from "react-router-dom";
import * as React from "react";
import Home from "../components/Home";
import { Element } from "../components/Element";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/element" component={Element} />
        {/* <Route component={Error} /> */}
    </Switch>
);

export default Routes;
