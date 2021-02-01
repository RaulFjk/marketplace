const initState = {
    technologies: []
 };
 
 const techonologiesReducer = (state = initState, action) => {
     switch (action.type) {
         case 'ADD_TECHNOLOGY':
             console.log('technology created', action.post);
             return state;
         case 'ADD_TECHNOLOGY_ERROR':
             console.log('create technology error', action.err);
         case 'DELETE_TECHNOLOGY':
             return state.filter((technology) => technology.id !== action.id);
         case 'DELETE_TECHNOLOGY_ERROR':
             return state;
         default:
             return state; }
 }

export default techonologiesReducer;
