import React from "react";
import Pay from "./Pay";
import Response from "./Response"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/payment-response">
          <Response />
        </Route>
        <Route path="/">
          <Pay />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
