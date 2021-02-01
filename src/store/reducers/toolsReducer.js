const initState = {
   tools: []
};

const toolsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TOOL':
            console.log('tool created', action.post);
            return state;
        case 'ADD_TOOL_ERROR':
            console.log('create tool error', action.err);
        case 'DELETE_TOOL':
            return state.filter((tool) => tool.id !== action.id);
        case 'DELETE_TOOL_ERROR':
            return state;
        default:
            return state; }
}

export default toolsReducer;