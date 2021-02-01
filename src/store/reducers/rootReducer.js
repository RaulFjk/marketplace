import authReducer from './authReducer';
import postsReducer from './postsReducer';
import companiesReducer from './companiesReducer';
import categoriesReducer from './categoriesReducer';
import toolsReducer from './toolsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import classificationsReducer from './classificationsReducer';
import techonologiesReducer from './technologiesReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer,
    company: companiesReducer,
    category: categoriesReducer,
    technology: techonologiesReducer,
    classification: classificationsReducer,
    tools: toolsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;