export const taskReducer = ( state, action ) => {
   
   switch( action.type ){
      case 'Add task':
         return {
            ...state,
            incomplete: [ ...state.incomplete, action.payload ]
         }
      
      case 'Delete task':
         return {
            ...state,
            incomplete: state.incomplete.filter( task => task.id !== action.payload )
         }
      
      case 'Delete completed':
         return {
            ...state,
            completed: []
         }
      
      default:
         return state;
   }
};