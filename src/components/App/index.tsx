import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import RecruterPage from 'pages/RecruterPage';
import CandidatePage from 'pages/CandidatePage';
import { getStore } from 'store';

import 'react-circular-progressbar/dist/styles.css';

const App = (): JSX.Element => {
	return (
		<Provider store={getStore()}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route path="/candidate">
						<CandidatePage />
					</Route>
					<Route path="/">
						<RecruterPage />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
