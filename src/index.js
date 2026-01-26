import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './Sections/List/List';
import Footer from './Sections/Footer/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><List /><Footer /></div>,
  },
  {
    path: "/portal-nag",
    element: <div><List /><Footer /></div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
