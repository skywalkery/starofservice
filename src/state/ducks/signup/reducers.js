import { handleActions } from 'redux-actions';
import types from './types';

const INITIAL_STATE = {
    steps: {
        1: {
            title: 'Signup'
        },
        2: {
            title: 'Signup'
        },
        3: {
            title: 'Thank you!'
        }
    },
    currentStep: 1
};

const stepsReducer = handleActions({
    [types.STEP_NEXT]: (state, action) => ({
        ...state,
        currentStep: state.currentStep + 1
    }),
    [types.STEP_PREVIOUS]: (state, action) => ({
        ...state,
        currentStep: state.currentStep - 1
    }),
}, INITIAL_STATE);

export default stepsReducer;
