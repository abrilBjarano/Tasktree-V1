import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Tasktree } from './Tasktree';


const router = createBrowserRouter([
  {
    path: "*",
    element: <Tasktree/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={ router }/>
  // </React.StrictMode>,
)
