import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Select from "react-select";

const Comments = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const { id } = useParams();
 console.log(id)
    const{user}=useContext(AuthContext);
    const axiosSecure=useAxiosSecure();

    const tagOptions=[
        {value:"good", label:"Good"},
        {value:"better", label:"Better"},
        {value:"best", label:"Best"}
    ]

console.log(selectedOption)

    const onSubmit = (data) => {
        const comment=data.addComment;
        const email=user?.email;
        const postId=id;
        const feedback=selectedOption.value;
        const commentInfo={
            comment,
            feedback,
            email,
            postId
        }
        axiosSecure.post("/comments", commentInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire("Thank you!", "comments done", "success");
            }
            reset();
          });
        
    }

    return (
        <div className="max-w-6xl  mx-auto py-24">
            <form onSubmit={handleSubmit(onSubmit)} >
            <table className="table table-zebra">
                {/* head */}
                <thead className="bg-[#C6A921] text-white">
                  <tr>
                    <th></th>
                    <th className="text-2xl">Comments</th>
                    <th className="text-2xl">email</th>
                    <th className="text-2xl">Feedback</th>
                    <th className="text-2xl">Report</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                   <th></th>
                    <td className="text-[#C6A921] text-xl font-semibold rounded-xl">
                    <div className="form-control">
                        <textarea
                          className="border-2 border-[#C6A921]"
                          name="addComment"
                          {...register("addComment",{required:true,maxLength: 20})}
                          id="addComment"
                          placeholder="Write Comment here..."
                          cols="3"
                          rows="5"
                        ></textarea>
                        <button className="btn text-white hover:bg-[#C6A921] bg-[#C6A921]">Add Comment</button>
                        {errors.addComment?.type === "maxLength" && (
                      <span className="text-red-700">
                        *you can not add comments more than 20
                      </span>
                    )}
                      </div>
                    </td>
                    <td className="text-[#C6A921] text-xl font-semibold">{user?.email}</td>
                    <td>
                    <Select className="text-black"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={tagOptions}
                        />
                    </td>
                   <td className="text-[#C6A921] text-xl font-semibold">
                    <button>
                        Report
                    </button>
                   </td>
                   </tr>
                </tbody>
              </table>
            </form>
             
        </div>
    );
};

export default Comments;