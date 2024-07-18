import { useContext } from "react";
import { TaskList } from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";
import { DeleteAllBtn } from "../components/DeleteAllBtn";

export const CompletedPage = () => {

   const { tasks } = useContext( TaskContext );

   return (
      <>
         <DeleteAllBtn />
         <TaskList tasks={ tasks.completed }/>
      </>
   )
}
