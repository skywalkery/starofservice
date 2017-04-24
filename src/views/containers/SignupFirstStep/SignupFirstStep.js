import React, { Component } from 'react';
import { Field, SubmissionError, reduxForm } from 'redux-form';
import validate from './validate';
import './SignupFirstStep.scss';

class SignupFirstStep extends Component {
    renderField({input, input: { name }, label, type, meta, meta: { error } }) {
        return (
            <div key={name} className="form-group">
                {!isNeedShowError(meta) && <label>{label}</label>}
                {isNeedShowError(meta) && <span className={`error-field-msg error-field-msg_no-margin signup-first-step__error-${name}`}>{error}</span>}
                <input {...input} type={type} className={`form-control signup signup-first-step__${name}`} />
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="signup-first-step">
                <Field
                    name="email"
                    type="email"
                    label="Email"
                    component={this.renderField}
                />
                <Field
                    name="password"
                    type="password"
                    label="Password"
                    component={this.renderField}
                />
                <Field
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    component={this.renderField}
                />
            </form>
        );
    }
}

const isNeedShowError = ({touched, error, active}) => {
    return touched && error && !active;
};

export default reduxForm({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
      gender: 'unspecified'
  },
  validate
})(SignupFirstStep);
