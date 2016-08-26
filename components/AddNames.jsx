import React from 'react';
class AddNames extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: ''
		}
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onChange(e){
		this.setState({ username: e.target.value });
	}
	
	onSubmit(e){
		e.preventDefault();
		console.log(this.state);
		this.props.userSignupRequest(this.state);
	}
	
	render(){
		return(
			<div>
			<h1>Add New Names</h1>
				<form onSubmit={this.onSubmit}>
					<table className="table">
					<tbody>
						<tr>
							<td>Enter Name</td>
							<td><input type="text" value={this.state.username} onChange={this.onChange} /></td>
						</tr>
						<tr>
							<td></td>
							<td><input type="submit" className="btn btn-default" value="Add Name"  /></td>
						</tr>
					</tbody>
					</table>
					</form>
			</div>
		);
	}
}

AddNames.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default AddNames;