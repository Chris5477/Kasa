import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SheetAnnoncement from "./pages/SheetAnnoncement";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/sheetAnnoncement/:id" exact component={SheetAnnoncement}></Route>
            <Route component={Error}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
