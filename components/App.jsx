import React from 'react';
import {IndexLink,Link} from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div className="col-sm-12">
						<h1>Sagar's CRUD APP</h1>
						<nav className="navbar navbar-default">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/add-names">Add Names</Link></li>
							</ul>
						</nav>
						
						<div className="col-sm-12">
							{this.props.children}
						</div>
						
					</div>
						
      );
   }
}

export default App;