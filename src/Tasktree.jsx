import { Navbar } from "./components/Navbar";
import { TaskProvider } from "./context/TaskProvider";
import { TaskRoutes } from "./routes/TaskRoutes";
import './styles.css';

export const Tasktree = () => {

   


   return (
      <TaskProvider>

         <Navbar/>


         <div className="mx-5 mx-lg-15">
            <TaskRoutes/>
         </div>

      </TaskProvider>
   )
}
