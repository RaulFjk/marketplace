export const createPost = (post) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        const { company, location, contract, apply, title, role, classification, responsabilities } = post;
        const techs = post.technologies;
        const toolsA = post.tools;
        const technolgies = techs.map(function (technology) { return technology.language; });
        const tools = toolsA.map(function (tool) { return tool.name; });
        firestore.collection('posts').add({
            company,
            location,
            contract,
            apply,
            title,
            role,
            classification,
            technolgies,
            tools,
            responsabilities,
            firstName: profile.firstName,
            lasName: profile.lastName,
            userId: authorid,
            postedAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        });
       
    };
};

export const deletePost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('posts').doc(post.id).delete().then(
            () => {
                dispatch({ type: 'DELETE_POST', post});
            }
        ).catch((err) => {
            dispatch({ type: 'DELETE_POST_ERROR', err})
        });
    };
};