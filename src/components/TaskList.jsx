import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { usePaperBackground } from "../hooks/usePaperBackground";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ img }) => {

   const { tasks, deleteTask, toggleTask, totalTasks, pendingTasks, completedTasks } = useContext( TaskContext );
   const { listContainerStyle, totalTasksStyle, containerStyle, itemStyle } = usePaperBackground( img );
   const location = useLocation();


   const tasksCompleted = tasks.filter( task => task.done === true );
   const tasksPending = tasks.filter( task => task.done === false );



   return (
      <div style={ listContainerStyle }>

      <h6 style={ totalTasksStyle }>Total tasks: { totalTasks() }. Pending tasks: { pendingTasks() }. Completed tasks: { completedTasks() }</h6>

         <div style={ containerStyle }>
            <ul className="list-group">
               {( ( location.pathname === '/' ) ? tasksPending : tasksCompleted ).map( task => (
                  <TaskItem 
                     deleteTask={ deleteTask }
                     toggleTask={ toggleTask }
                     task={ task }
                     itemStyle={ itemStyle } />
               ))}
            </ul>
         </div>
      </div>
   )
}
