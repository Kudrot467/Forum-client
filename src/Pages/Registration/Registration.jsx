import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaMedal } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const { createUser, setProfilePicture } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassWord] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const image_url = form.image_url.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType="bronze";

    // const user = {
    //   userName,
    //   image_url,
    //   email,
    //   password,
    // };
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Please take a capital letter");
      return;
    } else if (
      !/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)
    ) {
      setRegisterError("Please take a special character ");
      return;
    }
    setRegisterError("");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setProfilePicture(userName,image_url);
        console.log(image_url);
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="py-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
          <div>
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="flex flex-col md:flex-col lg:flex-row gap-1">
              <div className="form-control">
                    
                </div>
                <div className="form-control w-full">
                <div className=" text-[#C6A921] font-medium text-lg text-center flex">
               <div>
               <FaMedal></FaMedal>
                <h3 className="bg-[#C6A921] text-white text-xl font-semibold p-3 rounded-xl mr-3">Bronze</h3>
               </div>
                <h1 className=" text-[#C6A921] font-bold text-xl rounded-xl w-full">Registration</h1>
                </div>
                <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="userName"
                    className="input input-bordered border-[#C6A921]"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image url"
                    name="image_url"
                    className="input input-bordered border-[#C6A921]"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered border-[#C6A921]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      name="password"
                      className="input input-bordered w-full border-[#C6A921]"
                      required
                    />
                    <span
                      className="absolute top-3 right-2"
                      onClick={() => setShowPassWord(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white hover:bg-[#C6A921] bg-[#C6A921]">
                  Registration
                </button>
              </div>
            </form>
            <p className="text-center font-medium text-lg text-[#C6A921]">
              Already have an account ?{" "}
              <Link className="text-red-400" to="/login">
                Login
              </Link>
            </p>
            {registerError && (
              <p className="text-red-700 text-center text-xl font-medium">
                {registerError}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
