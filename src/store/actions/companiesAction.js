import { constants } from "react-redux-firebase";

export const addCompany = (company) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorid = getState().firebase.auth.uid;
        const { name, headquarter, industry, size, website, description } = company;
        // const techs = post.technologies;
        // const toolsA = post.tools;
        // const technolgies = techs.map(function (technology) { return technology.language; });
        // const tools = toolsA.map(function (tool) { return tool.name; });
        firestore.collection('companies').add({
            name,
            headquarter,
            industry,
            size,
            website,
            description
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