import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";


const initialState = {
   incomplete: [
      {  
         id: new Date().getTime() * 3,
         description: 'Crear Tasktree',
         done: false,  
      },
      {
         id: new Date().getTime() * 2,
         description: 'Ir a correr',
         done: false,  
      }
   ],
   completed: [
      {
         id: new Date().getTime() * 5,
         description: 'Lavar mi Miata',
         done: true,
      },
      {
         id: new Date().getTime() * 4,
         description: 'Comprar los boletos de avión a Brazil',
         done: true
      }
   ]
}


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState );


   const addTask = ( newTask ) => {
      dispatch({
         type: 'Add task',
         payload: newTask
      })
   };

   const deleteTask = ( id ) => {
      dispatch({
         type: 'Delete task',
         payload: id
      })
   };


   return (
      <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
         { children }
      </TaskContext.Provider>
   )
}
