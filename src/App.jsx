import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Layout from './Components/Layout/Layout'; // This component should render your Navbar
import Home from './Components/Home/Home';
import Register from './components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './components/Pages/Profile/Profile';
import Posts from './components/Pages/Posts/Posts';


const App = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // The Layout component contains the Navbar and an <Outlet />
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
            {
        path: "posts",
        element: <Posts />,
      },
      // ... other pages
    ],
  },
]);


    return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

