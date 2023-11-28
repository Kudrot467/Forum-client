import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaBullhorn } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MakeAnnouncements = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic=useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = user?.displayName;
    const image_url = user?.photoURL;
    const email=user?.email;
    const announcementDescription = data.announcementDescription;
    const announcement={
      name,
      image_url,
      email,
      announcementDescription
    }
    axiosPublic.post("/makeAnnouncements", announcement).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Congrats!", "Announcement done !", "success");
        }
        reset();
      });

  }

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
              <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
                <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="flex flex-col gap-1">
                      <div className=" text-[#C6A921] font-medium text-lg text-center flex">
                        <h1 className=" text-[#C6A921] font-bold text-2xl rounded-xl w-full underline">
                          Make Announcement
                        </h1>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-[#C6A921] font-medium text-lg">
                           Announcement Title
                          </span>
                        </label>
                        <input
                          type="text"
                          {...register("announcementTitle", { required: true })}
                          placeholder="Enter announcement Title"
                          name="announcementTitle"
                          className="input input-bordered border-[#C6A921]"
                        />
                        {errors.announcementTitle && (
                          <span className="text-red-700">
                            *Write your title
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-[#C6A921] font-medium text-lg">
                            Announcement Description
                          </span>
                        </label>
                        <textarea
                          className="border-2 border-[#C6A921]"
                          name="announcementDescription"
                          {...register("announcementDescription", { required: true })}
                          id="announcementDescription"
                          placeholder="Write announcement Description"
                          cols="20"
                          rows="10"
                        ></textarea>
                        {errors.announcementDescription && (
                          <span className="text-red-700">
                            *Write your announcement details
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn text-white hover:bg-[#C6A921] bg-[#C6A921]">
                        <FaBullhorn></FaBullhorn>
                        Make Announcement
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default MakeAnnouncements;