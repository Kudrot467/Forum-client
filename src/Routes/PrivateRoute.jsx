
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading)
    {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if(user)
    {
        return children;
    }
    return <Navigate state={{from:location}} replace to="/login"></Navigate>
};
PrivateRoute.propTypes={
    children:PropTypes.node
}

export default PrivateRoute;