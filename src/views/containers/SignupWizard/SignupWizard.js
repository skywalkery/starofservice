import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import {
    SignupFirstStep,
    SignupSecondStep,
    SignupCompleteStep,
} from '..';
import {
    Header,
    StepProgress,
    NavigationFooter
} from '../../components';
import { signupSelectors } from '../../../state/ducks/signup';
import { signupActions } from '../../../state/ducks/signup';
import './SignupWizard.scss';

class SignupWizard extends Component {
    onComplete(values) {
        const {email, password, gender, how_hear_about_us, dd, mm, yyyy} = values;
        const user_data = {
            email,
            password,
            gender,
            how_hear_about_us,
            date_of_birth: new Date(yyyy, mm, dd).getTime() / 1000
        };
        console.log('complete', {user_data});
    }

    renderStep() {
        const { goNext } = this.props;

        switch (this.props.currentStep) {
            case 1:
                return <SignupFirstStep key="first-step" onSubmit={goNext} />;
            case 2:
                return <SignupSecondStep key="second-step" onSubmit={goNext} />;
            case 3:
                return <SignupCompleteStep key="complete-step" onSubmit={this.onComplete} />;
            default:
                return;
        }
    }

    renderFooter() {
        const { isFirstStep, isLastStep, goBack, submitForm } = this.props;
        if (isLastStep) {
            return;
        }

        return <NavigationFooter
            formName="signupForm"
            showBack={!isFirstStep}
            onBack={goBack}
            onSubmit={submitForm}
        />;
    }

    render() {
        const { step, stepsCount, currentStep } = this.props;

        return (
            <div className="signup-layout">
                <Header title={step.title} />
                <StepProgress total={stepsCount} current={currentStep} />
                <ReactCSSTransitionReplace
                    transitionName="cross-fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {this.renderStep()}
                </ReactCSSTransitionReplace>
                {this.renderFooter()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        step: signupSelectors.getStep(state),
        stepsCount: signupSelectors.getStepsCount(state),
        currentStep: state.signup.currentStep,
        isFirstStep: signupSelectors.getIsFirstStep(state),
        isLastStep: signupSelectors.getIsLastStep(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators({
        goBack: signupActions.gotoPreviousStep,
        goNext: signupActions.gotoNextStep
    }, dispatch);

    return {
        ...actions,
        submitForm: () => {dispatch(submit('signupForm'))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupWizard);
