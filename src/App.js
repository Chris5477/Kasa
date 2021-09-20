import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route component={Error}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
