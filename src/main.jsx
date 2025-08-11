import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProjectDetails from './Components/ProjectDetails .jsx';
import AllProjects from './Components/AllProjects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: () => fetch('../Projects.json')
  },
  {
    path: "/project-details/:id",
    Component: ProjectDetails,
    loader: () => fetch('../Projects.json')
  },
  {
    path: "/all-projects",
    Component: AllProjects,
    loader: () => fetch('../Projects.json')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
