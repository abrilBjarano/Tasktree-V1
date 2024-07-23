import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { toast } from 'sonner';


export const DeleteAllBtn = () => {

   const { deleteCompleted } = useContext( TaskContext );

   return (
      <div className="d-flex justify-content-end mb-4">
         <button
            onClick={ () => {
               deleteCompleted();
               toast('Deleted all completed tasks');
            }}
            className="btn btn-danger">
               Delete all
         </button>
      </div>
   )
}
