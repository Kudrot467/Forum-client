import { FaAd, FaList, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
        
      <div className="w-64 min-h-screen bg-[#C6A921]">
        <ul className="menu">
          <li >
            <NavLink
              to="myProfile"
              style={({isActive})=>{
                return{
                 backgroundColor: isActive ? "white":"",
                 fontSize:isActive ? "20px":"24px",
                 fontWeight: isActive ?"700":"600",
                 color:isActive ? "#C6A921":"white",
                 marginBottom:isActive ?"12px":"12px",
                }
 
               }}
            >
                <FaUser></FaUser>
             My Profile--
            </NavLink>
          </li>
          <hr /><hr />
          <li>
            <NavLink
              to="addPost"
              style={({isActive})=>{
                return{
                 backgroundColor: isActive ? "white":"",
                 fontSize:isActive ? "20px":"24px",
                 fontWeight: isActive ?"700":"600",
                 color:isActive ? "#C6A921":"white",
                 marginBottom:isActive ?"12px":"12px",
                }
 
               }}
            >
                <FaAd></FaAd>
             Add Post--
            </NavLink>
          </li>
          <hr /><hr />
          <li>
            <NavLink
              to="myPosts"
              className=""
              style={({isActive})=>{
               return{
                backgroundColor: isActive ? "white":"",
                fontSize:isActive ? "20px":"24px",
                fontWeight: isActive ?"700":"600",
                color:isActive ? "#C6A921":"white",
                marginBottom:isActive ?"12px":"12px",
               }

              }}
            >
                <FaList></FaList>
             My Posts--
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
