import { toast } from 'sonner';


export const TaskItem = ({ task, itemStyle, deleteTask, toggleTask }) => {


   const onBtnClick = ( task ) => {
      deleteTask( task.id );
   };

   const onClickTask = ( task ) => {
      toggleTask( task.id );
   };


   return (
      <h5
         className="list-group-item d-flex justify-content-between align-items-center"
         style={ itemStyle }
         key={ task.id }>
            {( location.pathname === '/')
                  ?
                     <>
                        <div
                           onClick={ () => {
                              onClickTask( task );
                              toast.success('Task completed');
                           }}
                        >
                              { task.description }
                        </div>
                        <button
                           onClick={ () => {
                              onBtnClick( task );
                              toast.info('Task deleted succesfully');
                           }}
                           className="btn btn-danger">
                              X
                        </button>
                     </>
                  : <del onClick={ () => onClickTask( task )}>
                        { task.description }
                     </del>
            }
      </h5>
   )
}
