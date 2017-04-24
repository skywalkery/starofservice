import React from 'react';
import './BackButton.scss';

const BackButton = ({children, className, onClick}) => {
    return (
        <span
            className={`back-button ${className}`}
            onClick={onClick}>
            {children}
        </span>
    );
};

export default BackButton;
