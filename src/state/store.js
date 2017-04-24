import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './ducks';

export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        ...reducers,
        form: formReducer
    });

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    );
}
