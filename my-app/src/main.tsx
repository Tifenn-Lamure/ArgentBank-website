import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";

import Layout from "./components/Layout/Layout"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Transaction from "./pages/Transaction/Transaction"

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children :[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        element: <ProtectedRoute/>,
        children : [
          {
            path: "/profile",
            element: <Profile/>
          },
          {
            path: "/transaction",
            element: <Transaction/>
          },
        ]
      }
    ],
  },
]);

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
