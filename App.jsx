import React from "react";
import First from './Pages/First'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {path:'/',element:<First/>},
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},
])
function App() {
     return <RouterProvider router={router} />
}
export default App;