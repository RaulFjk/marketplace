const initState = {
    classifications: []
 };
 
 const classificationsReducer = (state = initState, action) => {
     switch (action.type) {
         case 'ADD_CLASSIFICATION':
             console.log('classification created', action.post);
             return state;
         case 'ADD_CLASSIFICATION_ERROR':
             console.log('create classification error', action.err);
         case 'DELETE_CLASSIFICATION':
             return state.filter((classification) => classification.id !== action.id);
         case 'DELETE_CLASSIFICATION_ERROR':
             return state;
         default:
             return state; }
 }

export default classificationsReducer;
