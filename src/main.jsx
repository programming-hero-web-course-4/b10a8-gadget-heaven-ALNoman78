import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Product from './components/Products/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element :<Home></Home>,
      },
      {
        path : '/statistics',
        loader : fetch ('/Data.json'),
        element : <div>moule</div>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
