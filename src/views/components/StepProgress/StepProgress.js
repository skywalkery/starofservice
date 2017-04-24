import React from 'react';
import './StepProgress.scss';

const StepProgress = ({ current, total }) => {
    const widthStyle = {
        width: `${(100 / total * current)}%`,
    };

    return (
        <div className="step-progress__container">
            <div className="step-progress__progress" style={widthStyle}>
            </div>
        </div>
    );
};

export default StepProgress;
