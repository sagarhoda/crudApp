import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import AddNames from './components/AddNames.jsx';
import ReadNames from './components/ReadNames.jsx';
import NotFound from './components/NotFound.jsx';
import routes from './components/routes.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = createStore(
	(state = {}) => state,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
	<Router history={ browserHistory } routes={routes}>
  </Router>
	</Provider>
	, document.getElementById('app')
);
