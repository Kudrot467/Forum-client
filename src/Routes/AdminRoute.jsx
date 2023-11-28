import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from 'prop-types';

const AdminRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin();
    const location = useLocation();
    console.log(location);

    if(loading||isAdminLoading)
    {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if(user && isAdmin)
    {
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace ></Navigate>
};
AdminRoute.propTypes={
    children:PropTypes.node
}

export default AdminRoute;