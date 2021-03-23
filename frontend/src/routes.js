import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SiloRegister from "./pages/SiloRegister";
import SiloView from "./pages/SiloView";
import ChartView from "./pages/ChartView";
import RegisterConfirmation from "./pages/RegisterConfirmation";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/cadastrar-silo" component={SiloRegister} />
        <Route path="/silo/:id" component={SiloView} />
        <Route path="/chart/silo/:id/:label" component={ChartView} />
        <Route path="/confirmation" component={RegisterConfirmation} />
      </Switch>
    </BrowserRouter>
  );
}
