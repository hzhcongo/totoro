import React from "react";
import logo from "../../resources/logo.svg";
import "./MrtMap.css";

export class MrtMap extends React.Component {

  public render() {
    return (
      <div className="MrtMap">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Totoro</p>
        </header>
      </div>
    );
  }
}
