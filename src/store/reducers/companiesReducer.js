const initState = {
    companies: [],
    
};

const companiesReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'ADD_COMPANY':
            console.log('Company added', action.company);
            return state;
        case 'ADD_COMPANY_ERROR':
            console.log('Company add error', action.err);
        case 'UPDATE_COMPANY':
            return state;
        case 'UPDATE_COMPANY_ERROR':
            return state;
        case 'DELETE_COMPANY':
            return state;
        case 'DELETE_COMPANY_ERROR':
            return state.filter((company) => company.id !== action.id);
        default:
            return state;
}

}

export default companiesReducer;