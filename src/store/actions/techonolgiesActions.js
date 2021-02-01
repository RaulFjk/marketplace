import { constants } from "react-redux-firebase";

export const addTechnology = (technology) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        const { language } = technology;
    
        firestore.collection('technologies').add({
            language
        }).then(() => {
            dispatch({ type: 'ADD_TECHNOLOGY', technology });
        }).catch((err) => {
            dispatch({ type: 'ADD_TECHNOLOGY_ERROR', err})
        });
       
    };
};


export const deleteTechnology = (technology) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('technologies').doc(technology.id).delete().then(
            () => {
                dispatch({ type: 'DELETE_TECHNOLOGY', technology});
            }
        ).catch((err) => {
            dispatch({ type: 'DELETE_TECHNOLOGY_ERROR', err})
        });
    };
};
