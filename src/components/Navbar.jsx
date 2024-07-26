import { NavLink } from "react-router-dom";
import { useRoutesInfo } from "../hooks/useRoutesInfo";
import tree from "../assets/tree.png"

export const Navbar = () => {

   const { routes } = useRoutesInfo();

   const getNavLinkClass = ({ isActive }) => {
      return `nav-link ${ isActive ? 'active' : '' }`
   };

   return (
      <nav className="navbar navbar-expand bg-body-tertiary rounded-bottom mb-4 navbar-yellow">
         <div className="d-flex justify-content-center">

            <a className="navbar-brand d-flex align-items-center mx-4">
               <img 
                  className="me-2"
                  src={ tree } alt="Logo" width="30" height="30"/>
               Tasktree
            </a>
         
            <div className="collapse navbar-collapse" id="navbarNav">
               <div className="navbar-nav">
               
                  { routes.map( route => (
                     <NavLink 
                        className={ getNavLinkClass } 
                        key={ route.name } 
                        to={ route.path }>

                           { route.name }
                     </NavLink>
                  ))}

               </div>
            </div>
         </div>
      </nav>
   )
}
