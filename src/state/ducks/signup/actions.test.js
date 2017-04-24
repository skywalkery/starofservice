import expect from 'expect.js';
import { gotoNextStep, gotoPreviousStep } from './actions';
import types from './types';

describe('signup actions', function() {
    describe('next step action', function() {
        const action  = gotoNextStep();

        it('has the correct type', function() {
            expect(action.type).to.be(types.STEP_NEXT);
        });
    });

    describe('previous step action', function() {
        const action  = gotoPreviousStep();

        it('has the correct type', function() {
            expect(action.type).to.be(types.STEP_PREVIOUS);
        });
    });
});
