import React from 'react';
import { SubmitButton, BackButton } from '..';
import './NavigationFooter.scss';

const NavigationFooter = ({showBack, onBack, onSubmit}) => {
    return (
        <div className="navigation-footer">
            <BackButton className={!showBack ? 'invisible': ''} onClick={onBack}>
                Back
            </BackButton>
            <SubmitButton onClick={onSubmit}>
                Next
                <span className="glyphicon glyphicon-arrow-right arrow" aria-hidden="true"></span>
            </SubmitButton>
        </div>
    );
};

export default NavigationFooter;
