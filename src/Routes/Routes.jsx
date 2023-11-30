import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddPost from "../Pages/Dashboard/AddPost/AddPost";
import MyPosts from "../Pages/Dashboard/MyPosts/MyPosts";
import Users from "../Pages/Dashboard/Users/Users";
import MakeAnnouncements from "../Pages/Dashboard/MakeAnnouncement/MakeAnnouncements";
import AdminRoute from "./AdminRoute";
import PrivateRoute from"./PrivateRoute";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import PostDetails from "../Pages/Home/PostDetails/PostDetails";
import Comments from "../Pages/Home/Comments/Comments";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/postDetails/:id',
            element:<PostDetails></PostDetails>
        },
        {
            path:'/comments/:id',
            element:<PrivateRoute><Comments></Comments></PrivateRoute>
        }
      ]
    },
     {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'userHome',
                element:<UserHome></UserHome>
            }
            ,
            {
                path:'myProfile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'addPost',
                element:<PrivateRoute><AddPost></AddPost></PrivateRoute>
            },
            {
                path:'myPosts',
                element:<PrivateRoute><MyPosts></MyPosts></PrivateRoute>
            },
            {
                path:'membership',
                element:<Payment></Payment>
            },
            //admin routes
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'adminProfile',
                element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },

            {
                path:'makeAnnouncements',
                element:<AdminRoute><MakeAnnouncements></MakeAnnouncements></AdminRoute>
            },

            {
                path:'manageUsers',
                element:<AdminRoute><Users></Users></AdminRoute>
            }
        ]
    }
  ]);

