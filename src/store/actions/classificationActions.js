import { constants } from "react-redux-firebase";

export const addClassification = (classification) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        const { name } = classification;
    
        firestore.collection('classifications').add({
            name
        }).then(() => {
            dispatch({ type: 'ADD_CLASSIFICATION', classification });
        }).catch((err) => {
            dispatch({ type: 'ADD_CLASSIFICATION_ERROR', err})
        });
       
    };
};


export const deleteClassification = (classification) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('classifications').doc(classification.id).delete().then(
            () => {
                dispatch({ type: 'DELETE_CLASSIFICATION', classification});
            }
        ).catch((err) => {
            dispatch({ type: 'DELETE_CLASSIFICATION_ERROR', err})
        });
    };
};
