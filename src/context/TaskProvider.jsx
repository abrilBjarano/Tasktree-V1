import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";


const initialState = {
   incomplete: [
      {  
         id: new Date().getDate() * 3,
         description: 'Crear Tasktree',
         done: false,  
      },
      {
         id: new Date().getDate() * 2,
         description: 'Ir a correr',
         done: false,  
      }
   ],
   completed: [
      {
         id: new Date().getDate() * 5,
         description: 'Lavar mi Miata',
         done: true,
      },
      {
         id: new Date().getDate() * 4,
         description: 'Comprar los boletos de avión a Brazil',
         done: true
      }
   ]
}


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState );


   return (
      <TaskContext.Provider value={{ tasks }}>
         { children }
      </TaskContext.Provider>
   )
}
