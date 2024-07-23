import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";


const initialState = [
   { id: new Date().getTime() * 3, description: 'Crear Tasktree', done: false },
   { id: new Date().getTime() * 2, description: 'Ir a correr', done: false },
   { id: new Date().getTime() * 5, description: 'Lavar mi Miata', done: true },
   { id: new Date().getTime() * 4, description: 'Prepara viaje a Brazil', done: true }
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
