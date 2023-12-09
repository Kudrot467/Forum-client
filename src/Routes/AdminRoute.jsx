import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useUsers from "../Hooks/useUsers";

const AdminRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const [users]=useUsers();
  const loggedInUser=users.find(User=>User.email===user?.email);
    const location = useLocation();
    console.log(location);

    if(loading)
    {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if(user && loggedInUser==='admin')
    {
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace ></Navigate>
};
AdminRoute.propTypes={
    children:PropTypes.node
}

export default AdminRoute;