import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RouterButton } from "components/RouterButton";
import { MrtMap } from "scenes/MrtMap/MrtMap";
import totoro from 'images/totoro.json';
import { Lottie } from '@crello/react-lottie';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Lottie
              height="25vh"
              config={{
                animationData: totoro,
                loop: true,
                autoplay: true,
              }}
            />
            <p>Totoro</p>
            <div className="buttonDiv">
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
            </div>
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
