import authReducer from './authReducer';
import postsReducer from './postsReducer';
import companiesReducer from './companiesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer,
    company: companiesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;