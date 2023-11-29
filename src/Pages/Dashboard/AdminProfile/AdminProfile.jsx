import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaArrowAltCircleDown } from "react-icons/fa";
import usePosts from "../../../Hooks/usePosts";
import useUsers from "../../../Hooks/useUsers";

const AdminProfile = () => {
    const {user}=useContext(AuthContext);
    const[allPost]=usePosts();
    const [users]=useUsers();

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
           </h2>
           <h1 className=" text-white text-xl font-semibold rounded-xl">
            Name: {user?.displayName}
          </h1>
          <p className="text-white text-xl font-semibold rounded-xl">
            Email:{user?.email}</p>
          
        </div>
        <div className="card-body">
          {/* <h2 className="card-title text-[#C6A921] underline">Recent Three Posts</h2> */}
          <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-2xl">Number Of Comments</th>
                    <th className="text-2xl">Number Of Posts</th>
                    <th className="text-2xl">Number Of Users</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                   <th></th>
                    <td className="text-[#C6A921] text-xl font-semibold rounded-xl"></td>
                    <td className="text-[#C6A921] text-xl text-center font-semibold">{allPost.length}</td>
                   <td className="text-[#C6A921] text-xl text-center font-semibold">
                    {users.length}
                   </td>
                   </tr>
                </tbody>
              </table>
        </div>
        </div>
      </div>
    </div>
    );
};

export default AdminProfile;