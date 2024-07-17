import { Navbar } from "./components/Navbar";
import { TaskProvider } from "./context/TaskProvider";
import { TaskRoutes } from "./routes/TaskRoutes";

export const Tasktree = () => {

   


   return (
      <TaskProvider>
         <Navbar/>
         <TaskRoutes/>
      </TaskProvider>
   )
}
