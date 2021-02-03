import { constants } from "react-redux-firebase";

export const addCompany = (company) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firebase = getFirebase();
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorid = getState().firebase.auth.uid;
        const { name, headquarters, industry, size, website, description, fileUrl } = company;
        
        firestore.collection('companies').add({
            name,
            headquarters,
            industry,
            size,
            website,
            description,
            fileUrl
        }).then(() => {
            dispatch({ type: 'ADD_COMPANY', company });
        }).catch((err) => {
            dispatch({ type: 'ADD_COMPANY_ERROR', err})
        });
       
    };
};


export const deleteCompany = (company) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('companies').doc(company.id).delete().then(
            () => {
                dispatch({ type: 'DELETE_COMPANY', company});
            }
        ).catch((err) => {
            dispatch({ type: 'DELETE_COMPANY_ERROR', err})
        });
    };
};

export const updateCompany = (updatedCompany, companyId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('companies').doc(companyId).update({...updatedCompany}).then(
            () => {
                dispatch({ type: 'UPDATE_COMPANY', updatedCompany});
            }
        ).catch((err) => {
            dispatch({ type: 'UPDATE_COMPANY_ERROR', err})
        });
    };
};
