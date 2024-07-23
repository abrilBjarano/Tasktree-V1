import { TaskAdd } from "../components/TaskAdd";
import { TaskList } from "../components/TaskList";
import paper from '../assets/paper.png';

export const HomePage = () => {

   return (
      <>
         <TaskAdd/>
         <TaskList img={ paper }/>
      </>
   )
}
