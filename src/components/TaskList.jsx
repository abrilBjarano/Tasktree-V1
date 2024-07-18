import { useLocation } from "react-router-dom";

export const TaskList = ({ tasks, img }) => {

   const location = useLocation();

   return (
      <ul className="list-group">
         { tasks.map( task => (
            <li 
               className="list-group-item d-flex justify-content-between align-items-center"
               key={ task.id }>

                  {( location.pathname === '/') 
                        ?
                           <>
                              { task.description }
                              <button className="btn btn-danger">X</button>
                           </>

                        : <del> {task.description} </del>
                  }

            </li>
         ))}
      </ul>
   )
}
