import React from 'react';
import App from './App.jsx';
import SignupPage from './SignupPage.js';
import ReadNames from './ReadNames.jsx';
import NotFound from './NotFound.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
	<Route path="/" component={ App }>
				<IndexRoute component= { ReadNames } />
				<Route path="add-names" component={ SignupPage } />
				<Route path="*" component={ NotFound } />
 	</Route>
)