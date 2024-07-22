import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const DeleteAllBtn = () => {

   const { deleteCompleted } = useContext( TaskContext );

   return (
      <div className="d-flex justify-content-end mb-4">
         <button
            onClick={ deleteCompleted }
            className="btn btn-danger">
               Delete all
         </button>
      </div>
   )
}
