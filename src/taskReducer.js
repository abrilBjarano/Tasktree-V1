export const taskReducer = ( state, action ) => {
   
   switch( action.type ){
      case 'Add task':
         return [ ...state, action.payload ];
      
      case 'Delete task':
         return state.filter( task => task.id !== action.payload );
      
      case 'Delete completed':
         return state.filter( task => task.done === false );
      
      default:
         return state;
   }
};