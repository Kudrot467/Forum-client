import {
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaComment,
  FaShare,
} from "react-icons/fa";
import usePosts from "../../../Hooks/usePosts";
import { Link, useParams } from "react-router-dom";
import { RedditShareButton } from "react-share";

const PostDetails = () => {
  const [allPost] = usePosts();
  const { id } = useParams();
  const detail = allPost.find((detail) => detail._id == id);

  return (
    <div className="max-w-5xl mx-auto pt-24 mb-10">
      <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">{detail.name}</a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full">
                    <img alt="author image" src={detail.image_url} />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title h-[30px] ">{detail.postTitle}</h2>
            <p>/{detail.tag}/</p>
            <p>{detail.postDate}</p>
            <p>{detail.postDescription}</p>
            <div className="card-actions">

              <div className="flex items-center">
                <button className="btn rounded-full mr-2">
                  <FaArrowAltCircleUp></FaArrowAltCircleUp>
                </button>
                <button className="btn rounded-full mr-2">
                  <FaArrowCircleDown></FaArrowCircleDown>
                </button>
              </div>

              <div >
              <Link
                className="btn bg-[#C6A921] mr-2 hover:bg-white hover:text-[#C6A921] text-white font-medium"
                to="/"
              >
                <FaComment></FaComment>
                Comments
              </Link>
              <RedditShareButton
                quote={detail.postTitle}
                url={`/posts/${detail._id}`}
              >
                <button>
                    <FaShare></FaShare>
                    </button>
              </RedditShareButton>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
