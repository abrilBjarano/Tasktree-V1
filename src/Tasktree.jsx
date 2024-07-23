import { Navbar } from "./components/Navbar";
import { TaskProvider } from "./context/TaskProvider";
import { TaskRoutes } from "./routes/TaskRoutes";
import './styles.css';
import { Toaster } from 'sonner';

export const Tasktree = () => {

   return (
      <TaskProvider>

         <Toaster
            richColors  
            expand={ false }
            position="bottom-center" />

         <Navbar/>


         <div className="mx-lg-12 mx-5">
            <TaskRoutes/>
         </div>

      </TaskProvider>
   ) 
}
