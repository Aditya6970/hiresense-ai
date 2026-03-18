import { createBrowserRouter } from "react-router-dom"

import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Home from "./features/interview/pages/Home"
import Interview from "./features/interview/pages/Interview"
import Protected from "./features/auth/components/Protected"

// 👇 simple auth check
const isAuthenticated = () => {
  return localStorage.getItem("user")
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? <Home /> : <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/interview/:interviewId",
    element: isAuthenticated() ? <Interview /> : <Login />
  }
])