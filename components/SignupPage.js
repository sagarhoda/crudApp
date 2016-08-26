import React from 'react';
import AddNames from './AddNames.jsx';
import {connect} from 'react-redux';
import { userSignupRequest } from './../actions/signupActions.js';

class SignupPage extends React.Component {
	render(){
		const { userSignupRequest } = this.props;
		return(
			<div>
				<AddNames userSignupRequest={userSignupRequest} />
			</div>
		)
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null,{ userSignupRequest })(SignupPage);