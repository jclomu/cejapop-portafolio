// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from "./components/Panel";
import About from "./pages/About" 
import Contact from "./pages/Contact";
import DevWeb from "./pages/DevWeb";
import Music from "./pages/Music";
import Tools from "./pages/Tools";
import Menu from './pages/Menu';
import Index from "./pages/index";
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Index />, 
  },    
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/panel",
    element: <Panel />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/devweb",
    element: <DevWeb />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/tools",
    element: <Tools />,
  },
  {
    path: "/menu",
    element: <Menu />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

