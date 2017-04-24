import { createAction } from 'redux-actions';
import types from './types';

export const gotoNextStep = createAction(types.STEP_NEXT);
export const gotoPreviousStep = createAction(types.STEP_PREVIOUS);

export default {
    gotoNextStep,
    gotoPreviousStep
}
