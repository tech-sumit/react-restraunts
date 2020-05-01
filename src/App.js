import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import RestrauntsList from "./components/RestrauntsList";
import RestrauntDetails from "./components/RestrauntDetails";
import History from "./components/History";

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (process.env.NODE_ENV !== "development") {
			console.log = function () { };
		}
	}

	render() {
		return (
			<div className="App">
				<Router history={History}>
					<div>
						<Switch>
							<Route exact path={"/"} component={RestrauntsList} />
							<Route path={"/details"} component={RestrauntDetails} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
export default App;
