import { useContext } from "react";
import { FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAnnouncement from "../../../Hooks/useAnnouncement";
import useUsers from "../../../Hooks/useUsers";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [announcements] = useAnnouncement();
  const [users]=useUsers();
  // const [isAdmin] = useAdmin();
  const signOut = () => {
    logOut().then().catch();
  };

  const loggedInUser=users.find(User=>User.email===user?.email);

  const navLinks = (
    <>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg"
          style={{
            backgroundColor: "#C6A921",
            fontSize: "20px",
            fontWeight: "600",
            color: "white",
          }}
          to="/"
        >
          Home
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg"
          style={{
            backgroundColor: "#C6A921",
            fontSize: "20px",
            fontWeight: "600",
            color: "white",
          }}
          to="/"
        >
          MemberShip
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <div
          className="indicator py-3"
          style={{
            backgroundColor: "#C6A921",
            fontSize: "20px",
            fontWeight: "600",
            color: "white",
          }}
        >
          <NavLink to="/">
            <span className="indicator-item badge badge-secondary">
              {announcements.length}
            </span>
            <FaBell></FaBell>
          </NavLink>{" "}
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar  fixed z-10 bg-opacity-20 bg-black">
      <div className="navbar-start">
        <img
          src="https://i.ibb.co/nnm9gD3/final-Logo.png"
          className=" w-[200px] h-[80px] bg-yellow-50 rounded-xl"
          alt=""
        />
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
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between text-[#C6A921] text-lg font-bold">
                    {user?.displayName}
                    <span className="badge indicator-item badge-secondary bg-green-500"></span>
                  </a>
                </li>
                <li className="text-lg mb-2 bg-[#C6A921] hover:bg-[#C6A921] text-white text-center">
                  {loggedInUser?.role==='admin' && (
                    <li className="mr-2">
                      {" "}
                      <div
                        style={{
                          backgroundColor: "#C6A921",
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        <NavLink to="/dashboard/adminHome">--Dashboard--</NavLink>{" "}
                      </div>
                    </li>
                  )}
                  {loggedInUser?.role==='user' &&(
                    <li className="mr-2">
                      {" "}
                      <div
                        style={{
                          backgroundColor: "#C6A921",
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        <NavLink to="/dashboard/userHome">Dashboard</NavLink>{" "}
                      </div>
                    </li>
                  )}
                </li>
                <li className="w-full">
                  <button
                    onClick={signOut}
                    className="text-lg bg-[#C6A921] hover:bg-[#C6A921] text-white text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {" "}
            <NavLink
              className="text-lg px-3 py-2 rounded-xl"
              style={{
                backgroundColor: "#C6A921",
                fontSize: "20px",
                fontWeight: "600",
                color: "white",
              }}
              to="/login"
            >
              Join Us
            </NavLink>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
