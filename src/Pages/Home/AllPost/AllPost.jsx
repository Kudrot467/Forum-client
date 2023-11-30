import {
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaComment,
  FaList,
} from "react-icons/fa";
import usePosts from "../../../Hooks/usePosts";
import { Link } from "react-router-dom";
import useComments from "../../../Hooks/useComments";

const AllPost = () => {
  const [allPost] = usePosts();
  const[comments]=useComments();
  const reversedPosts = allPost.slice().reverse();
    console.log(reversedPosts);
  
  return (
    <div className="max-w-6xl mx-auto">
      <h1  className="text-2xl text-[#C6A921] font-semibold underline flex items-center"> <FaList className="mr-3"></FaList>Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {reversedPosts.map((post) => (
          <div key={post._id}>
         <Link to={`/postDetails/${post._id}`}>
         <div className="card card-compact bg-base-100 shadow-xl">
            <div className="navbar bg-base-100">
              <div className="flex-1">
                <a className="btn btn-ghost text-xl">{post.postDate}</a>
              </div>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-14 rounded-full">
                      <img alt="author image" src={post.image_url} />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title h-[30px] ">{post.postTitle}</h2>
              <p>{post.tag}</p>
              <div className="card-actions">
                <div className="flex items-center">
                  <button  className="btn rounded-full">
                    <FaArrowAltCircleUp></FaArrowAltCircleUp>
                  </button>
                  <p className="btn">{post.upVote-post.downVote}</p>
                  <button className="btn rounded-full">
                    <FaArrowCircleDown></FaArrowCircleDown>
                  </button>
                </div>
                <Link
                  className="btn bg-[#C6A921] hover:bg-white hover:text-[#C6A921] text-white font-medium"
                  to="/"
                >
                  {
                    comments.find((comment) => comment.postId == post._id)
                     
                  }
                  <FaComment></FaComment>
                  Comments
                </Link>
              </div>
            </div>
          </div>
         </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
