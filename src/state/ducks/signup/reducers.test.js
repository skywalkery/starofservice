import expect from 'expect.js';
import { gotoNextStep } from './actions';
import reducer from './reducers';
import types from './types';

describe('signup reducers', function() {
    describe('go to next step', function() {
        const action = {
            type: types.STEP_NEXT
        };

        const initialState = {
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

        const result = reducer(initialState, action);

        it('should set current step to next in the state', function() {
            expect(result.currentStep).to.be(2);
        });
    });

    describe('go to previous step', function() {
        const action = {
            type: types.STEP_PREVIOUS
        };

        const initialState = {
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
            currentStep: 2
        };

        const result = reducer(initialState, action);

        it('should set current step to previos in the state', function() {
            expect(result.currentStep).to.be(1);
        });
    });
});
