import React, { useState } from "react";
import logo from "../../resources/logo.svg";
import Button from "@bit/mui-org.material-ui.button";
import { makeStyles } from "@bit/mui-org.material-ui.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useHistory,
} from "react-router-dom";

import "./App.css";
import MrtMap from "../MrtMap/MrtMap";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	input: {
		display: "none",
	},
}));

function takesATrain() {
	console.warn("takesATrain");
}

function findsAHouse() {
	alert("findsAHouse");
}

function useAppStatus() {
  const [isOnline, setIsOnline] = useState(null);

	let path = "/MrtMap";
	let history = useHistory();
	history.push(path);

  return isOnline;
}

function App() {
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
						<Link to="/MrtMap">About</Link>
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
				<Route path="/MrtMap">
					<MrtMap />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
