const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        default:
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ... state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ... state,
                authError: action.err.message
            }
        case 'RECOVER_PASSWORD_SUCCESS':
            console.log('recover success');
            return state;

        case 'RECOVER_PASSWORD_ERROR':
            console.log('recover error');
            return state;
    }
    
};

export default authReducer;
