import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";


const initialState = [
   {
      id: new Date().getDate() * 3,
      description: 'Crear Tasktree',
      done: false,  
   },
   {
      id: new Date().getDate() * 2,
      description: 'Ir a correr',
      done: false,  
   },
]


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState );


   return (
      <TaskContext.Provider value={{ tasks }}>
         { children }
      </TaskContext.Provider>
   )
}
