import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { toast } from 'sonner';
import { usePaperBackground } from "../hooks/usePaperBackground";

export const TaskList = ({ img }) => {

   const { tasks, deleteTask, toggleTask } = useContext( TaskContext );
   const { listContainerStyle, totalTasksStyle, containerStyle, itemStyle } = usePaperBackground( img );
   const location = useLocation();


   const tasksCompleted = tasks.filter( task => task.done === true );
   const tasksPending = tasks.filter( task => task.done === false );


   const onBtnClick = ( task ) => {
      deleteTask( task.id );
   };

   const onClickTask = ( task ) => {
      toggleTask( task.id );
   };


   return (
      <div style={ listContainerStyle }>

      <h6 style={ totalTasksStyle }>Total tasks: X. Pending tasks: Y. Completed tasks: W</h6>

         <div style={ containerStyle }>
            <ul className="list-group">
               {( ( location.pathname === '/' ) ? tasksPending : tasksCompleted ).map( task => (
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
               ))}
            </ul>
         </div>
      </div>
   )
}
