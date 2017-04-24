import _ from 'lodash';
import {createSelector} from 'reselect';

const stepsSelector = state => state.signup.steps;
const currentStepSelector = state => state.signup.currentStep;

const getStep = (steps, currentStep) => {
    return steps[currentStep];
};

const getStepsCount = (steps) => {
    return _.keys(steps).length;
};

const getIsFirstStep = (currentStep) => {
    return currentStep === 1;
};

const getIsLastStep = (steps, currentStep) => {
    const sortedKeys =  _.map(_.keys(steps), Number).sort();
    return _.last(sortedKeys) === currentStep;
};

export default {
    getStep : createSelector(stepsSelector, currentStepSelector, getStep),
    getStepsCount: createSelector(stepsSelector, getStepsCount),
    getIsFirstStep: createSelector(currentStepSelector, getIsFirstStep),
    getIsLastStep: createSelector(stepsSelector, currentStepSelector, getIsLastStep),
};
