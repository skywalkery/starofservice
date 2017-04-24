import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import './SignupCompleteStep.scss';

class SignupCompleteStep extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="signup-complete-step">
                <span className="glyphicon glyphicon-ok-sign ok-sign" aria-hidden="true"></span>
                <button type="submit" className="btn btn-dashboard">
                    Go to Dashboard
                    <span className="glyphicon glyphicon-arrow-right arrow" aria-hidden="true"></span>
                </button>
            </form>
        );
    }
}

export default reduxForm({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SignupCompleteStep);
