import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassWord] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from=location.state?.from?.pathname ||"/";
    const axiosPublic=useAxiosPublic();
  
    const handleGoogleLog = () => {
      googleSignIn()
      .then(result=>{
        const userInfo={
          email:result.user?.email,
          name:result.user?.displayName,
          image_url:result.user?.photoURL
        }
        axiosPublic.post('/users',userInfo)
       .then(res=>{
        console.log(res.data);
        navigate('/')
       })
      })
      .catch();
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email=form.email.value;
      const password=form.password.value;
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "login successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true});
         form.reset();
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          
        });
    };

    return (
        <div>
             <div className="hero min-h-screen">
      <div className="hero-content md:w-3/4 lg:w-1/2 flex-col md:flex-row">
      <div className="">
            <img className="w-full rounded-lg" src="" alt="" />
          <img
            className="w-full"
            src="https://i.ibb.co/ZK6xP04/Blue-and-White-Illustrated-Login-Page-Mobile-Prototype.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
             
             <button className="btn text-white hover:bg-[#C6A921] bg-[#A3CA33]">
                Login
              </button>
             
            </div>
          </form>
          <p className="text-center font-medium text-lg text-[#C6A921]">
            New Applicant ?{" "}
            <Link className="text-red-400" to="/registration">
              Register
            </Link>
          </p>
          <div className="flex items-center justify-center my-6">
            <button onClick={handleGoogleLog} className="btn  text-[#C6A921]">
              <FaGoogle></FaGoogle>Continue with Google
            </button>
          </div>
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default Login;