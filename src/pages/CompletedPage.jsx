import { TaskList } from "../components/TaskList";
import { DeleteAllBtn } from "../components/DeleteAllBtn";
import crinkledPaper from '../assets/crinkled_paper.jpg';

export const CompletedPage = () => {

   return (
      <>
         <DeleteAllBtn />
         <TaskList img={ crinkledPaper }/>
      </>
   )
}
