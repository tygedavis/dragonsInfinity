import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    toggles: toggleReducer,
    stats: statsReducer
});

export default rootReducer;