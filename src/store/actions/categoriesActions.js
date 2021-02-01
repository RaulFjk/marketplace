import { constants } from "react-redux-firebase";

export const addCategory = (category) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        const { name } = category;
    
        firestore.collection('categories').add({
            name
        }).then(() => {
            dispatch({ type: 'ADD_CATEGORY', category });
        }).catch((err) => {
            dispatch({ type: 'ADD_CATEGORY_ERROR', err})
        });
       
    };
};


export const deleteCategory = (category) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('categories').doc(category.id).delete().then(
            () => {
                dispatch({ type: 'DELETE_CATEGORY', category});
            }
        ).catch((err) => {
            dispatch({ type: 'DELETE_CATEGORY_ERROR', err})
        });
    };
};
