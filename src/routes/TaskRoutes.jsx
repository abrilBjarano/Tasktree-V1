import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { CompletedPage } from "../pages/CompletedPage";

export const TaskRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={ <HomePage/> } />
         <Route path="/completed" element={ <CompletedPage/> } />

         <Route path="/*" element={ <Navigate to="/"/> } />
      </Routes>
   )
}
