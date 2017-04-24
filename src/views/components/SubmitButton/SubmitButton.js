import React from 'react';
import './SubmitButton.scss';

const SubmitButton = ({ onClick, children }) => {
    return (
        <span
            className="submit-button"
            onClick={onClick}>
            {children}
        </span>
    );
};

export default SubmitButton;
