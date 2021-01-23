import authReducer from './authReducer';
import postsReducer from './postsReducer';
import companiesReducer from './companiesReducer';
import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer,
    company: companiesReducer,
    category: categoriesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;