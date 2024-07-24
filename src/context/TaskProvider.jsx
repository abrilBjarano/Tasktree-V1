import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";
import { v4 as uuidv4 } from 'uuid';


const initialState = [
   { id: uuidv4(), description: 'Comprar ramo de flores', done: false },
   { id: uuidv4(), description: 'Ir a correr', done: false },
   { id: uuidv4(), description: 'Lavar mi Miata', done: false },
   { id: uuidv4(), description: 'Prepara viaje a Brazil', done: true },
   { id: uuidv4(), description: 'Crear Tasktree', done: true },
   { id: uuidv4(), description: 'Subir Tasktree a Github', done: true },
   { id: uuidv4(), description: 'Leer Neville Goddard', done: true },
   { id: uuidv4(), description: 'Dar mantenimiento a las bicis', done: true },
   { id: uuidv4(), description: 'Subir Tasktree a Github pages', done: true },
   { id: uuidv4(), description: 'Comprar huevito Kinder', done: true },
]


const init = () => {
   return JSON.parse( localStorage.getItem('tasks') ) || initialState;
};


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState, init );

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify( tasks ));
   }, [tasks]);


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

   const deleteCompleted = () => {
      dispatch({
         type: 'Delete completed'
      })
   };

   const toggleTask = ( id ) => {
      dispatch({
         type: 'Toggle task',
         payload: id
      })
   };


   const totalTasks = () => {
      return tasks.length;
   };

   const pendingTasks = () => {
      return tasks.filter( task => !task.done ).length;
   };

   const completedTasks = () => {
      return tasks.filter( task => task.done ).length;
   };


   return (
      <TaskContext.Provider value={{ 
         tasks,
         addTask,
         deleteTask,
         deleteCompleted,
         toggleTask,
         totalTasks,
         pendingTasks,
         completedTasks

       }}>
         { children }
      </TaskContext.Provider>
   )
}
