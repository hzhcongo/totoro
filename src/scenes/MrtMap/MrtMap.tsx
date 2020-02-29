import React from "react";
import logo from "../../resources/logo.svg";
import Button from "@bit/mui-org.material-ui.button";
import { makeStyles } from "@bit/mui-org.material-ui.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./MrtMap.css";
import App from "../App/App";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	input: {
		display: "none",
	},
}));

function takesATrain() {
	alert("takesATrain");
}

function findsAHouse() {
	alert("findsAHouse");
}

function MrtMap() {
	const classes = useStyles();

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
						className={classes.button}
						onClick={takesATrain}
					>
						Takes a train
					</Button>
					<Button
						id="findsAHouseBtn"
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						onClick={findsAHouse}
					>
						Finds a house
					</Button>
				</header>
			</div>
			<Switch>
				<Route path="/">
					<App />
				</Route>
			</Switch>
		</Router>
	);
}

export default MrtMap;
