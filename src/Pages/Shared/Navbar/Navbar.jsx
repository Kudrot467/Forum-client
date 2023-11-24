import { FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
 
 

//   const signOut = () => {
//     logOut().then().catch();
//   };
  const navLinks = (
    <>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg" style={{backgroundColor:"#C6A921",
        fontSize:"20px",fontWeight:"600",color:"white"}}
          to="/"
        >
          Home
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg" style={{backgroundColor:"#C6A921",
          fontSize:"20px",fontWeight:"600",color:"white"
          }}
          to="/"
        >
         MemberShip
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg py-3" style={{backgroundColor:"#C6A921",
          fontSize:"20px",fontWeight:"600",color:"white"
          }}
          
          to="/"
        >
       <FaBell></FaBell>
       <div
           className="text-lg badge badge-secondary">+0</div>
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg"
          style={{backgroundColor:"#C6A921",
          fontSize:"20px",fontWeight:"600",color:"white"
          }}
          to="/login"
        >
         Join Us
        </NavLink>{" "}
      </li>
    </>
  );


  return (
    <div className="navbar  fixed z-10 bg-opacity-20 bg-black">
      <div className="navbar-start">
        <img src="https://i.ibb.co/nnm9gD3/final-Logo.png" className="w-[200px] h-[80px] bg-yellow-50 rounded-xl" alt="" />
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* links */}
            {navLinks}
          </ul>
        </div>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* links */}
          {navLinks}
        
        </ul>
      </div>
      <div className="navbar-end">
        
           {/* <img className="w-20 rounded-full"  alt="" />
            <button
              onClick={signOut}
              className="btn bg-[#CB6CE6] hover:bg-[#CB6CE6] text-white"
            >
              Logout
            </button>
          </div>
        ) : ( */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
