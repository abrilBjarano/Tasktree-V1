import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {

   const { tasks } = useContext( TaskContext );


   return (
      <ul className="list-group">
         { tasks.map( task => (
            <li 
               className="list-group-item d-flex justify-content-between align-items-center"
               key={ task.id }>

                  { task.description }

                  <div className="">
                     <button className="btn btn-danger">
                        X
                     </button>
                  </div>
            </li>
         ))}
      </ul>
   )
}
