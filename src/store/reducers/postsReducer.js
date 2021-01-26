const initState = {
    posts: []
};

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state.filter((post) => post.id != action.id);
        case 'DELETE_POST':
            return state;
        case 'DELETE_POST_ERROR':
            return state;
        default:
            return state;
    }
}

export default postsReducer;