import React from 'react';
import Ajax from 'react-ajax';
import $ from 'jquery';
class ReadNames extends React.Component {
	
	render(){
		return(
			
			<div>
				<h1>Available Names</h1>
				<table className="table">
					<tbody>
					<tr>
						<th>Name</th><th>Action</th>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default ReadNames;