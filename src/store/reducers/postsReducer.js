const initState = {
    posts: [], 
    filteredPosts: [],
    classificationFilter: '',
    technologiesFilter: '',
    postErr: null
};

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
        case 'UPDATE_POST':
            return state;
        case 'UPDATE_POST_ERROR':
            return state;
        case 'DELETE_POST':
            return state;
        case 'DELETE_POST_ERROR':
            return state.filter((post) => post.id !== action.id);
        case 'FILTER_BY_CLASSIFICATIONS_POSTS':
            return { 
                ...state,
                filteredPosts: action.payload.filteredPosts,
                classificationFilter: action.payload.classification.value
             };
        case 'FILTER_BY_CLASSIFICATIONS_POSTS_ERROR':
            return { 
                ...state,
                postErr: action.err 
            };
        case 'FILTER_BT_TECHNOLOGIES_POSTS':
            return { 
                ...state,
                filteredPosts: action.payload.filteredPosts,
                technologiesFilter: action.payload.technology.value
             };
        default:
            return state;
    }
}

export default postsReducer;