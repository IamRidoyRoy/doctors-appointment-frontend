import Appointment from "../Pages/AppointmentPage/Appointment"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup"
import PrivateRoute from "./PrivateRoute/PrivateRoute"

const { createBrowserRouter } = require("react-router-dom")
const { default: Main } = require("../Layout/Main")


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])