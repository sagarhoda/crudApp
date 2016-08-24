import React from 'react';

class AddNames extends React.Component {
	render(){
		return(
			<div>
			<h1>Add New Names</h1>
				<form>
					<table className="table">
					<tbody>
						<tr>
							<td>Enter Name</td>
							<td><input type="text" ref="username" /></td>
						</tr>
						<tr>
							<td></td>
							<td><input type="submit" className="btn btn-default" value="Add Name" /></td>
						</tr>
					</tbody>
					</table>
					</form>
			</div>
		);
	}
}

export default AddNames;