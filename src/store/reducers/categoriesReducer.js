const initState = {
    categories: []
 };
 
 const categoriesReducer = (state = initState, action) => {
     switch (action.type) {
         case 'ADD_CATEGORY':
             console.log('category created', action.post);
             return state;
         case 'ADD_CATEGORY_ERROR':
             console.log('create category error', action.err);
         case 'DELETE_CATEGORY':
             return state.filter((category) => category.id !== action.id);
         case 'DELETE_CATEGORY_ERROR':
             return state;
         default:
             return state; }
 }

export default categoriesReducer;
