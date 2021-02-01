import { constants } from "react-redux-firebase";

export const addTool = (tool) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        const { name, relatedTech } = tool;
    
        firestore.collection('tools').add({
            name,
            relatedTech
        }).then(() => {
            dispatch({ type: 'ADD_TOOL', tool });
        }).catch((err) => {
            dispatch({ type: 'ADD_TOOL_ERROR', err})
        });
       
    };
};


export const deleteTool = (tool) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tools').doc(tool.id).delete().then(
            () => {
                dispatch({ type: 'DELETE_TOOL', tool});
            }
        ).catch((err) => {
            dispatch({ type: 'DELETE_TOOL_ERROR', err})
        });
    };
};
