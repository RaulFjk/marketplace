export const createPost = (post) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
            post
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        });
       
    };
};