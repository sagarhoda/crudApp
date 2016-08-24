import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import AddNames from './components/AddNames.jsx';
import ReadNames from './components/ReadNames.jsx';
import NotFound from './components/NotFound.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={ browserHistory }>
      <Route path="/" component={ App }>
				<IndexRoute component= { ReadNames } />
				<Route path="/add-names" component={ AddNames } />
				<Route path="*" component={ NotFound } />
      </Route>
    </Router>
	, document.getElementById('app')
);
