import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Fields, reduxForm, formValueSelector } from 'redux-form';
import { DateInput } from '../../components';
import validate from './validate';
import './SignupSecondStep.scss';

class SignupSecondStep extends Component {
    renderDOB(fields) {
        return (
            <div className="form-group">
                {hasNoDateError(fields) && <label>Date of Birth</label>}
                {!hasNoDateError(fields) && <span className="error-field-msg">{getDateError(fields)}</span>}
                <DateInput ddField={fields.dd} mmField={fields.mm} yyyyField={fields.yyyy} />
            </div>
        );
    }

    renderGenderField(gender) {
        const { genderValue } = this.props;
        return (
            <label key={gender} className={`btn btn-default btn-gender ${genderValue === gender ? 'active' : ''}`}>
                <Field name="gender" component="input" type="radio" value={gender} />{gender}
            </label>
        );
    }

    renderGender() {
        return (
            <div className="form-group">
                <label>Gender</label>
                <div className="btn-group radio-group" data-toggle="buttons">
                    {_.map(['male', 'female', 'unspecified'], this.renderGenderField.bind(this))}
                </div>
            </div>
        );
    }

    renderHowHear() {
        return (
            <div className="form-group">
                <label>Where did you hear about us?</label>
                <div>
                    <Field className="form-control" name="how_hear_about_us" component="select">
                        <option></option>
                        <option value="buddy">Buddy</option>
                        <option value="web">Web</option>
                        <option value="tv">TV</option>
                    </Field>
                </div>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="signup-second-step">
                <Fields names={[ 'dd', 'mm', 'yyyy' ]} component={this.renderDOB}/>
                {this.renderGender()}
                {this.renderHowHear()}
            </form>
        );
    }
}

const isNeedShowError = ({touched, error, active}) => {
    return touched && error && !active;
};

const getDateError = (fields) => {
    const { dd, mm, yyyy } = fields;
    return dd.meta.error || mm.meta.error || yyyy.meta.error;
};

const hasNoDateError = (fields) => {
    const { dd, mm, yyyy } = fields;
    return (dd.meta.active || mm.meta.active || yyyy.meta.active) ||
        !dd.meta.touched && !mm.meta.touched && !yyyy.meta.touched ||
        !dd.meta.error && !mm.meta.error && !yyyy.meta.error;
};

SignupSecondStep = reduxForm({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignupSecondStep);

const selector = formValueSelector('signupForm');
SignupSecondStep = connect(
    state => {
        const genderValue = selector(state, 'gender');
        return {
            genderValue
        };
    }
)(SignupSecondStep);

export default SignupSecondStep;
