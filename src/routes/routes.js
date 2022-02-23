import { Route, Switch } from "react-router-dom";
import * as React from "react";
import Home from "../components/Home";
import { Element } from "../components/Element";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp"
import Errors from "../components/pages/Error"
import BlackPage from "../components/pages/BlackPage";
import Chart from "../components/Chart";
import Table from "../components/Table";
import Form from "../components/Form";
import Widgets from "../components/Widgets";
const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/element" component={Element} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/widget" component={Widgets} />
        <Route exact path="/table" component={Table} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/404" component={Errors} />
        <Route exact path="/blackpage" component={BlackPage} />
    </Switch>
);

export default Routes;
