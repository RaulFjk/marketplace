import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer
});

export default rootReducer;