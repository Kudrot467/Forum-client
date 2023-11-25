import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaArrowAltCircleDown, FaMedal } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyProfile = () => {
    const {user}=useContext(AuthContext);
    const [loggedUser,setLoggedUser]=useState([]);
    const axiosSecure=useAxiosSecure();
    useEffect(()=>{
        axiosSecure(`/users?email=${user?.email}`)
        // .then(res=>res.json())
        .then(res=>setLoggedUser(res.data[0]));
    },[])
  return (
    <div className="max-w-6xl mx-auto">
      <div className="card bg-base-100 shadow-xl mt-20">
        <figure>
          <img
            className="w-full md:w-auto lg:w-1/3"
            src={user?.photoURL}
            alt="Album"
          />
        </figure>
        <div className="flex flex-col md:flex-row">
        <div className="card-body bg-[#C6A921]">
          <h2 className="card-title text-white text-xl font-semibold rounded-xl">
           <span className=" flex items-center"> <span className="mr-2">Details</span> <FaArrowAltCircleDown></FaArrowAltCircleDown>
            
           </span>
           </h2>
           <h1 className=" text-white text-xl font-semibold rounded-xl">
            Name: {user?.displayName}
          </h1>
          <p className="text-white text-xl font-semibold rounded-xl">
            Email:{user?.email}</p>
          <p className=" text-white text-xl font-semibold rounded-xl flex">
          <FaMedal></FaMedal>
            {loggedUser.medal}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">Recent Three Posts</h2>
          <p>{user?.email}</p>
          <p>{loggedUser.medal}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
