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
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard/Dashboard';
import PreOrder from './components/PreOrder/PreOrder';
import Submit from './components/Submit/Submit';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        loader: () => fetch('/Data.json'),
        // element: <div>moule</div>,j
      },
      {
        path: '/product/:product_id',
        loader: () => fetch('/Data.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/dashboard',
        loader: () => fetch('/Data.json'),
        element: <Dashboard></Dashboard>
      },
      {
        path: '/order',
        element: <PreOrder></PreOrder>
      },
      {
        path: '/submit',
        element: <Submit></Submit>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </HelmetProvider>
  </StrictMode>,
)
