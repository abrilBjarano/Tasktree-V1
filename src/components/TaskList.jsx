import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { toast } from 'sonner';

export const TaskList = ({ img }) => {

   const { tasks, deleteTask, toggleTask } = useContext( TaskContext );
   const location = useLocation();


   const tasksCompleted = tasks.filter( task => task.done === true);
   const tasksPending = tasks.filter( task => task.done === false);


   const onBtnClick = ( task ) => {
      deleteTask( task.id );
   };

   const onClickTask = ( task ) => {
      toggleTask( task.id );
   };


   const listContainerStyle = {
      backgroundImage: `url(${ img })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center calc(0% - 50px)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '96px',
      paddingRight: '82px',
      position: 'relative',
   };

   const totalTasksStyle = {
      position: 'absolute',
      top: 0, 
      left: '130px',
      backgroundColor: 'transparent', 
      paddingTop: '50px', 
   };

   const containerStyle = {
      width: '67%', 
   };

   const itemStyle = {
      backgroundColor: 'transparent',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      width: '130%', // Ancho del elemento li
      margin: '0 auto',
      display: 'flex', // Haciendo el li un contenedor flex
      alignItems: 'center', // Alineación vertical de los elementos hijos
      justifyContent: 'space-between', // Espacio entre los elementos dentro del li
      padding: '10px', // Espacio alrededor de los elementos
   };


   return (
      <div style={ listContainerStyle }>

      <p style={totalTasksStyle}>Total tasks: X. Pending tasks: Y</p>

         <div style={containerStyle}>
            <ul className="list-group">
               {( ( location.pathname === '/' ) ? tasksPending : tasksCompleted ).map( task => (
                  <li
                     className="list-group-item d-flex justify-content-between align-items-center"
                     style={itemStyle}
                     key={ task.id }>
                        {( location.pathname === '/')
                              ?
                                 <>
                                    <div
                                       onClick={ () => {
                                          onClickTask( task );
                                          toast.success('Task completed');
                                       }}
                                    >
                                          { task.description }
                                    </div>
                                    <button
                                       onClick={ () => {
                                          onBtnClick( task );
                                          toast.info('Task deleted succesfully');
                                       }}
                                       className="btn btn-danger">
                                          X
                                    </button>
                                 </>
                              : <del onClick={ () => onClickTask( task )}>
                                    { task.description }
                                </del>
                        }
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}
