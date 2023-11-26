import {
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaComment,
} from "react-icons/fa";
import usePosts from "../../../Hooks/usePosts";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllPost = () => {
  const [allPost] = usePosts();
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);
  const [upVoteActive, setUpVoteActive] = useState(false);
  const [downVoteActive, setDownVoteActive] = useState(false);
  const reversedPosts = allPost.slice().reverse();
    console.log(reversedPosts);
  const upVote = () => {
    if (upVoteActive) {
      setUpVoteActive(false);
      setUpVotes(upVotes - 1);
    } else {
      setUpVoteActive(true);
      setUpVotes(upVotes + 1);
      if (downVoteActive) {
        setDownVoteActive(true);
        setUpVotes(upVotes + 1);
        setDownVotes(downVotes - 1);
      }
    }
  };
  const downVote=()=>{
    if(downVoteActive){
        setDownVoteActive(false);
        setDownVotes(downVote-1);
    }else{
        setUpVoteActive(true);
        setUpVotes(upVotes+1);
        if(upVoteActive){
            setDownVoteActive(false);
            setUpVotes(upVotes+1);
            setDownVotes(downVotes-1);
        }
    }
  }
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="6xl">{allPost.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {reversedPosts.map((post) => (
          <div key={post._id}>
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
                <h2 className="card-title">{post.postTitle}</h2>
                <p>{post.tag}</p>
                <div className="card-actions">
                  <div className="flex items-center">
                    <button onClick={upVote} className="btn rounded-full">
                      <FaArrowAltCircleUp></FaArrowAltCircleUp>
                      {upVotes}
                    </button>
                    <p className="btn"></p>
                    <button onClick={downVote} className="btn rounded-full">
                      <FaArrowCircleDown></FaArrowCircleDown>
                      {downVotes}
                    </button>
                  </div>
                  <Link
                    className="btn bg-[#C6A921] hover:bg-white hover:text-[#C6A921] text-white font-medium"
                    to="/membership"
                  >
                    <FaComment></FaComment>
                    Comments
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
