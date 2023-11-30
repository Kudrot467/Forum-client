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
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
     {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'myProfile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'addPost',
                element:<AddPost></AddPost>
            },
            {
                path:'myPosts',
                element:<MyPosts></MyPosts>
            },
            //admin routes
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

