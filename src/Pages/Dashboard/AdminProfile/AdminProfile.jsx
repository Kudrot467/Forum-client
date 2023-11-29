import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Select from "react-select";
import usePosts from "../../../Hooks/usePosts";
import useUsers from "../../../Hooks/useUsers";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AdminProfile = () => {
    const {user}=useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const[allPost]=usePosts();
    const [users]=useUsers();
    const {
        handleSubmit,
      } = useForm();
      const axiosSecure = useAxiosSecure();

    const tagOptions = [
        { value: "Technology", label: "Technology" },
        { value: "Programming", label: "Programming" },
        { value: "Web Development", label: "Web Development" },
        { value: "Design", label: "Design" },
        { value: "Data Science", label: "Data Science" },
        { value: "Artificial Intelligence", label: "Artificial Intelligence" },
        { value: "Cybersecurity", label: "Cybersecurity" },
        { value: "Mobile App Development", label: "Mobile App Development" },
        { value: "Startups", label: "Startups" },
        { value: "Machine Learning", label: "Machine Learning" }
      ];
      const onSubmit = (data) => {
        console.log(data)
        const email=user?.email;
        const tag = selectedOption.value;
        const storeTag={
            email,
            tag
        }
        axiosSecure.post('/tags',storeTag)
        .then(res=>{
            if (res.data.insertedId) {
                Swal.fire("Congrats!", "Tags stored successfully !", "success");
              }
        })
      }

      

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
              <div>
              <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-[#C6A921]">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={tagOptions}
                        />
                     <button className="w-full text-white font-semibold text-xl hover:bg-[#C6A921] bg-[#C6A921]">
                       Store Tags
                      </button>    
                        
           </form>
              </div>
        </div>
        </div>
      </div>
    </div>
    );
};

export default AdminProfile;