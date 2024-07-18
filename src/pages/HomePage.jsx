import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import { TaskAdd } from "../components/TaskAdd";
import { TaskList } from "../components/TaskList";

export const HomePage = () => {

   const { tasks } = useContext( TaskContext );

   return (
      <>
         <TaskAdd/>
         <TaskList tasks={ tasks.incomplete }/>
      </>
   )
}
