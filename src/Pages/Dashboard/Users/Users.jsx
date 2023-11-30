import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.userName} is an admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="bg-[#C6A921] text-white font-medium">
            <th></th>
            <th className="text-2xl">Name</th>
            <th className="text-2xl">Email</th>
            <th className="text-2xl">Role</th>
            <th className="text-2xl">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td className="text-[#C6A921] text-xl font-semibold rounded-xl">
                {user.userName}
              </td>
              <td className="text-[#C6A921] text-xl font-semibold">
                {user.email}
              </td>
              <td className="text-[#C6A921] text-xl font-semibold">
                {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-lg bg-[#C6A921] hover:bg-[#C6A921] "
                  >
                    <FaUsers className="text-white"></FaUsers>Make Admin
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDeleteUser(user)}
                  className="btn btn-ghost btn-lg"
                >
                  <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
