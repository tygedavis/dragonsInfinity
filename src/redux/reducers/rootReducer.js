import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import statsReducer from './statsReducer';
import weaponsReducer from './weaponReducer';

const rootReducer = combineReducers({
    toggles: toggleReducer,
    stats: statsReducer,
    weapons: weaponsReducer
});

export default rootReducer;