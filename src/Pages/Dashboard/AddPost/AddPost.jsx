import { useContext, useState } from "react";
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedOption, setSelectedOption] = useState(null);

  const tagOptions = [
    { value: "technology", label: "Technology" },
    { value: "programming", label: "Programming" },
    { value: "design", label: "Design" },
    { value: "entertainment", label: "Entertainment" },
  ];

  const onSubmit = (data) => {
    const name=user?.displayName;
    const image_url = user?.photoURL;
    const email = user?.email;
    const postTitle=data.postTitle;
    const postDescription=data.postDescription;
    const tag=selectedOption.value;

    const post={
        name,
        image_url,
        email,
        postTitle,
        postDescription,
        tag
    }
    console.log(post);

  };

  return (
    <div>
      <h2 className="4xl">This is add Product</h2>
      <div className="py-20">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
            <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="flex flex-col gap-1">
                    <div className=" text-[#C6A921] font-medium text-lg text-center flex">
                      <h1 className=" text-[#C6A921] font-bold text-2xl rounded-xl w-full underline">
                        Create a Post
                      </h1>
                    </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#C6A921] font-medium text-lg">
                        Post tile
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("postTitle", { required: true })}
                      placeholder="Enter Post Title"
                      name="postTitle"
                      className="input input-bordered border-[#C6A921]"
                    />
                    {errors.postTitle && (
                      <span className="text-red-700">*Write your title</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#C6A921] font-medium text-lg">
                        Post Description
                      </span>
                    </label>
                    <textarea
                      className="border-2 border-[#C6A921]"
                      name="postDescription"
                      {...register("postDescription", { required: true })}
                      id="postDescription"
                      placeholder="Write Post Description"
                      cols="20"
                      rows="10"
                    ></textarea>
                    {errors.postDescription && (
                      <span className="text-red-700">
                        *Write your post details
                      </span>
                    )}
                  </div>
                  <div className="border-2 border-[#C6A921]">
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={tagOptions}
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white hover:bg-[#C6A921] bg-[#C6A921]">
                    Create Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
