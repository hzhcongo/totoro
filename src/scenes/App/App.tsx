import React, { Component } from "react";
import logo from "resources/logo.svg";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import { RouterButton } from "components/RouterButton";
import { MrtMap } from "scenes/MrtMap/MrtMap";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Totoro</p>
            <RouterButton
              id="takesATrainBtn"
              displayText="Takes a train"
              route="/MrtMap"
            />
            <RouterButton
              id="findsAHouseBtn"
              displayText="Finds a house"
              route="/MrtMap"
            />
          </header>
        </div>
        <Switch>
          <Route path="/MrtMap">
            <MrtMap />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
