import { FaComment } from "react-icons/fa";
import usePost from "../../../Hooks/usePost";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyPosts = () => {
  const [myPosts,refetch] = usePost();
  const axiosSecure=useAxiosSecure();

  const handleDeleteUser = (post) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/posts/${post._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        })
      }
    })
     
  }
    

  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl text-[#C6A921] text-center font-semibold">--My posts--
        <br />
        {myPosts.length}</h2>
        <div>
          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-2xl">Post title</th>
                    <th className="text-2xl">Number Of Votes</th>
                    <th className="text-2xl">comments</th>
                  </tr>
                </thead>
                <tbody>
                  {myPosts.map(myPost=><tr key={myPost._id}>
                    <th></th>
                    <td className="card-title text-[#C6A921] text-xl ml-3 font-semibold rounded-xl">{myPost.postTitle}</td>
                    <td className="text-[#C6A921] text-xl text-center font-semibold">{myPost.upVote-myPost.downVote}</td>
                    <td><Link className="btn bg-[#C6A921] hover:bg-white hover:text-[#C6A921] text-white font-medium" to="/membership"><FaComment></FaComment>
                  Comments
                  </Link></td>
                  <td>
                  <button onClick={()=>handleDeleteUser(myPost)} className="btn bg-red-600 text-white hover:bg-white hover:text-red-600">
                        Delete</button>
                  </td>
                 
                  </tr>)}
                </tbody>
              </table>
            </div>
            {/* <div className="card bg-base-100 shadow-xl mt-20">
                <h2 className="card-title text-[#C6A921] text-xl ml-3 font-semibold rounded-xl">
                  {myPost.postTitle}
                </h2>
                <div className="card-body">
                  <p className="text-[#C6A921] text-xl font-semibold">
                    Number of Votes:{myPost.upVote - myPost.downVote}
                  </p>
                  <div className="card-body bg-[#C6A921] flex flex-col md:flex-row justify-center">
                  <Link className="btn bg-[#C6A921] hover:bg-white hover:text-[#C6A921] text-white font-medium" to="/membership"><FaComment></FaComment>
                  Comments
                  </Link>
                    <button className="btn bg-red-600 text-white hover:bg-white hover:text-red-600">
                        Delete</button>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
