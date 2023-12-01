import React from "react"
import './App.css';
import NotFound from "./components/404Page/404Page";
import Dashboard from "./components/dashboard/dashboard";
import ProtectedRoute from "./utils/protectedRoutes/protectedRoutes";
import Admin from "./layouts/admin";
import Auth from "./layouts/auth";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      element: <Admin />,
      errorElement: <Navigate to="/login" />,
      children:
        [
          {
            path: "/login"
            // element: <Login />
          },
          {
            path: "/register"
            // element: <Register />
          }
        ]
    },
    {
      element: <Auth />,
      children: [
        {
          path: "/dashboard",
          element:
            (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            )
        }
      ]
    }
  ])

  return (

    <RouterProvider router={router} />

  );
}

export default App;