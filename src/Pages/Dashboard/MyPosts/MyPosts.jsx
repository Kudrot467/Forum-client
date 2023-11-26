import { FaComment } from "react-icons/fa";
import usePost from "../../../Hooks/usePost";
import { Link } from "react-router-dom";

const MyPosts = () => {
  const [myPosts] = usePost();
  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <h2 className="3xl">My posts{myPosts.length}</h2>
        <div>
          {myPosts.map((myPost) => (
            <div key={myPost._id}>
              <div className="card bg-base-100 shadow-xl mt-20">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
