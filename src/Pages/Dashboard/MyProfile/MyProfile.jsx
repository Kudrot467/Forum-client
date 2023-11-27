import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaArrowAltCircleDown, FaMedal } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import usePost from "../../../Hooks/usePost";

const MyProfile = () => {
    const {user}=useContext(AuthContext);
    const [loggedUser,setLoggedUser]=useState([]);
    const [myPosts] = usePost();
    const axiosSecure=useAxiosSecure();

    const reversedPosts = myPosts.slice().reverse();
    const recentThreePosts = reversedPosts.slice(0, 3);
    console.log(recentThreePosts);

    useEffect(()=>{
        axiosSecure(`/users?email=${user?.email}`)
        // .then(res=>res.json())
        .then(res=>setLoggedUser(res.data[0]));
    },[])
  return (
    <div className="max-w-6xl mx-auto">
      <div className="card bg-base-100 shadow-xl mt-20 mb-10">
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
           <p className=" text-white text-xl font-semibold rounded-xl flex">
          <FaMedal></FaMedal>
            {loggedUser.medal}</p>
           </h2>
           <h1 className=" text-white text-xl font-semibold rounded-xl">
            Name: {user?.displayName}
          </h1>
          <p className="text-white text-xl font-semibold rounded-xl">
            Email:{user?.email}</p>
          
        </div>
        <div className="card-body">
          <h2 className="card-title text-[#C6A921] underline">Recent Three Posts</h2>
          <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-2xl">Post title</th>
                    <th className="text-2xl">Number Of Votes</th>
                    <th className="text-2xl">Posted Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentThreePosts.map(myPost=><tr key={myPost._id}>
                    <th></th>
                    <td className="text-[#C6A921] text-xl font-semibold rounded-xl">{myPost.postTitle}</td>
                    <td className="text-[#C6A921] text-xl text-center font-semibold">{myPost.upVote-myPost.downVote}</td>
                   <td className="text-[#C6A921] text-xl text-center font-semibold">
                    {myPost.postDate}
                   </td>
                  </tr>)}
                </tbody>
              </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
