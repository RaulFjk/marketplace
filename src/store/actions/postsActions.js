import { constants } from "react-redux-firebase";

export const createPost = (post) => {
    // because we added withExtraagument to thunk in index.js, we can now pass one more Argument to the thunk return statement
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        const { company, location, contract, apply, description, title, role, technologies,tools, classification, responsabilities, qualifications } = post;
        // const techs = post.technologies;
        // const toolsA = post.tools;
        // const technolgies = techs.map(function (technology) { return technology.language; });
        // const tools = toolsA.map(function (tool) { return tool.name; });
        firestore.collection('posts').add({
            company,
            location,
            contract,
            description,
            apply,
            title,
            role,
            classification,
            technologies,
            tools,
            responsabilities,
            qualifications,
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

export const updatePost = (updatedPost, postId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('posts').doc(postId).update({...updatedPost}).then(
            () => {
                dispatch({ type: 'UPDATE_POST', updatedPost});
            }
        ).catch((err) => {
            dispatch({ type: 'UPDATE_POST_ERROR', err})
        });
    };
};

export const filterPostByClassifications = (posts, filteredPostsList, filter) => {

    const classification = filter ? (filter) : ('');
    var filteredPosts= [];
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const techFilter = getState().post.technologiesFilter;
        const technologyFilter = techFilter ? (techFilter) : ("");
        if(technologyFilter === "" && filter === null){
            filteredPosts = posts;
        }else if(technologyFilter !== "" && filter === null){
                filteredPosts = posts.filter(item => item.technologies.some(obj => obj.id === technologyFilter));}
        else if(technologyFilter === ""){
            filteredPosts = posts.filter(item => item.classification === filter.value);
        }else if(technologyFilter !== "" && filter){
            const firstList = posts.filter(item => item.classification === filter.value); 
            const secondList = firstList.filter(item => item.technologies.some(obj => obj.id === technologyFilter));
            filteredPosts = secondList;
        }else{
            filteredPosts = filteredPostsList.filter(item => item.classification === filter.value); 
        }
        dispatch({type:'FILTER_BY_CLASSIFICATIONS_POSTS', payload:{filteredPosts, classification} });
        // const firestore = getFirestore();
        // firestore.collection("posts").where("classifications", "==", filter)
        // .get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         filteredPosts.push(doc.data());
        //     })
        //     dispatch({type:'FILTER_BY_CLASSIFICATIONS_POSTS', filteredPosts});
        // }
        // ).catch((err)=> {
        //     dispatch({type: 'FILTER_BY_CLASSIFICATIONS_POSTS_ERROR', err})
        // })
    };
};

export const filterPostByTechnologies = (posts, filteredPostsList, filter) => {
    const technology = filter ? (filter) : ('');
    var filteredPosts = [];
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const state = getState().post;
        const classFilter = getState().post.classificationFilter;
        const classificationFilter =  classFilter ? (classFilter) : ("");
        if(classificationFilter === "" && filter === null){
            filteredPosts = posts;
        }else if(classificationFilter !== "" && filter === null){
            filteredPosts = posts.filter(item => item.classification === classificationFilter);
        }else if(classificationFilter === ""){
            filteredPosts = posts.filter(item => item.technologies.some(obj => obj.id === filter.value) ) 
        }else{
            filteredPosts = filteredPostsList.filter(item => item.technologies.some(obj => obj.id === filter.value) );
        }
        dispatch({type:'FILTER_BY_TECHNOLOGIES_POSTS', payload:{filteredPosts, technology} });

    };
};

export const searchPosts = (posts, filteredPostsList, searchTerm) => {
    var filteredPosts = [];
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const classFilter = getState().post.classificationFilter;
        const techFilter = getState().post.technologiesFilter;
        const classificationFilter =  classFilter ? (classFilter) : ("");
        const technologyFilter = techFilter ? (techFilter) : ("");

        if(searchTerm === "" && classificationFilter === "" && technologyFilter=== "" ){
            filteredPosts = posts;
        }else if(searchTerm !== "" && (classificationFilter !== "" || technologyFilter!== "") ){
            filteredPosts = filteredPostsList.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));;
        }else if(searchTerm !== ""){
            filteredPosts = posts.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));;
        }else if(searchTerm === "" && (classificationFilter !== "" || technologyFilter!== "" )){
            if(classificationFilter !== "") filteredPosts = posts.filter(item => item.classification === classificationFilter); 
            else
                filteredPosts = posts.filter(item => item.technologies.some(obj => obj.id === technologyFilter) );
        }
        dispatch({type:'SEARCH_POSTS', payload:{filteredPosts, searchTerm} });

    };
};