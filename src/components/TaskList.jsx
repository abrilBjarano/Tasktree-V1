import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { toast } from 'sonner';

export const TaskList = ({ img }) => {

   const { tasks, deleteTask, toggleTask } = useContext( TaskContext );
   const location = useLocation();


   const tasksCompleted = tasks.filter( task => task.done === true);
   const tasksPending = tasks.filter( task => task.done === false);


   const onBtnClick = ( task ) => {
      deleteTask( task.id );
   };

   const onClickTask = ( task ) => {
      toggleTask( task.id );
   };


   return (
      <ul className="list-group">
         {( ( location.pathname === '/' ) ? tasksPending : tasksCompleted ).map( task => (
            <li 
               className="list-group-item d-flex justify-content-between align-items-center"
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

            </li>
         ))}
      </ul>
   )
}
