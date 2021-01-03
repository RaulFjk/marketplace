const initState = {};

const jobsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
    }
    return state;
}

export default jobsReducer;