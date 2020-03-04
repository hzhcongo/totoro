import React, { useState } from "react";
import { Button } from "@material-ui/core";
import logo from "../../resources/logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import "./App.css";
import MrtMap from "../MrtMap/MrtMap";

function takesATrain() {
  alert("takesATrain");
}

function findsAHouse() {
  alert("findsAHouse");
}

function useAppStatus() {
  const [isOnline] = useState(null);

  let path = "/MrtMap";
  let history = useHistory();
  history.push(path);

  return isOnline;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Totoro</p>
          <Button
            id="takesATrainBtn"
            variant="contained"
            color="primary"
            size="large"
            onClick={takesATrain}
          >
            Takes a train
          </Button>
          <Button
            id="findsAHouseBtn"
            variant="contained"
            color="primary"
            size="large"
            onClick={findsAHouse}
          >
            Finds a house
          </Button>
        </header>
      </div>
      <Switch>
        <Route path="/MrtMap">
          <MrtMap />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
