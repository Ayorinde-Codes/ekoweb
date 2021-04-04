import React, {useState, useEffect}  from "react";

import Index from "./components/website";
import Header from "./components/website/header"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Notfound from "./components/notfound";
import Health from "./components/website/health";
import Transport from "./components/website/transport";
import Citizen from "./components/website/citizens";

export default function App(props) {

  return (
    <div>
    <div>

          <Router>
            <Header/>

            <Switch>
              <Route exact path="/" component={Index } />   
              <Route path="/health" component={Health } />       
              <Route path="/transport" component={Transport } />       
              <Route path="/citizens" component={Citizen } />       
              <Route path="*" component={Notfound} />
            </Switch>
          </Router>

        </div>
    </div>
  );
}
