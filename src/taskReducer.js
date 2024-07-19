export const taskReducer = ( state, action ) => {
   
   switch( action.type ){
      case 'Add task':
         return {
            ...state,
            incomplete: [ ...state.incomplete, action.payload ]
         }
      
      default:
         return state;
   }
};