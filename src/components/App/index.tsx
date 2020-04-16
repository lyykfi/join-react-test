import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecruterPage from 'pages/RecruterPage';
import CandidatePage from 'pages/CandidatePage';
import { getStore } from 'store';

const App = () => {
	return (
		<Provider store={getStore()}>
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
