import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';

const rootReducer = combineReducers({
    toggles: toggleReducer
});

export default rootReducer;