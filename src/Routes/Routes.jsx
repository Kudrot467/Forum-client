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
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
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
        }
      ]
    },
     {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'myProfile',
                element:<MyProfile></MyProfile>
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
                element:<AdminProfile></AdminProfile>
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

