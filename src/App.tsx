import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/templates/Home";
import Main from "./components/templates/Main";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/dashboard" exact component={Main} />
        <Route
          path="*"
          component={() => (
            <h1 style={{ textAlign: "center" }}>you are lost!</h1>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
