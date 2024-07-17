export const taskReducer = ( state, action ) => {
   
   switch( action.type ){
      case 'Add':
         return [ ...state, action.dispatch ];
      
      default:
         return state;
   }
};