import DashboardLayout from "../Layout/DashboardLayout";
import Appointment from "../Pages/AppointmentPage/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
