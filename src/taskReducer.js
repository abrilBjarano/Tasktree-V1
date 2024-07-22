export const taskReducer = ( state, action ) => {
   
   switch( action.type ){
      case 'Add task':
         return [ ...state, action.payload ];
      
      default:
         return state;
   }
};