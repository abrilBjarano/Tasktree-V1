import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export const TaskList = ({ img }) => {

   const { tasks, deleteTask } = useContext( TaskContext );
   const location = useLocation();


   const tasksCompleted = tasks.filter( task => task.done === true);
   const tasksPending = tasks.filter( task => task.done === false);


   const onBtnClick = ( task ) => {
      deleteTask( task.id );
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
                              { task.description }

                              <button
                                 onClick={ () => onBtnClick( task ) }
                                 className="btn btn-danger">
                                    X
                              </button>
                           </>

                        : <del> { task.description } </del>
                  }

            </li>
         ))}
      </ul>
   )
}
