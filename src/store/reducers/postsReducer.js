const initState = {
    posts: [], 
    filteredPosts: []
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
            return { filteredPosts: action };
        case 'FILTER_BT_TECHNOLOGIES_POSTS':
            return { filteredPosts: action}
        default:
            return state;
    }
}

export default postsReducer;