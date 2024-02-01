
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HelmetUse from "../Shared/HelmetUse";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../Shared/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, user } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(location.state ? location.state : "/");
    });
  };

  return (
    <div className="md:py-32 bg-BackGround_one bg-no-repeat bg-cover">
      <HelmetUse helmet={'Login'}/>
      <div className=" rounded-xl max-w-7xl mx-auto">
        <div className="flex flex-col p-3  md:flex-row items-center justify-center gap-20">
          
          <div className="  w-full rounded-2xl bg-white  font-hebo md:w-1/3 p-10">
            <h1 className="text-center font-semibold text-4xl font-manrope">Welcome Back!</h1>
            <p className="text-center text-lg text-gray-500 mt-2">
            Please login to your account
            </p>
            <div className="mt-8">
              <form onSubmit={handleLogin}>
                <label htmlFor="">
                  Email
                  <input
                    className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Your Email"
                  />
                </label>
                <label htmlFor="">
                  Confirm Password
                  <input
                    className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Your Password"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-[#0052CC] disabled:bg-yellow-200 text-white uppercase w-full py-2 rounded"
                >
                  Sign in
                </button>
              </form>
              <h1 className="text-sm font-light mt-3 text-center">
                or Sign up with
              </h1>

              <div className="flex items-center justify-center gap-3 mt-4">
                <BsFacebook className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
                <BsLinkedin className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
                {/* <BsGoogle className="h-8 w-8 p-2 bg-gray-200 text--600 rounded-full" /> */}
                <SocialLogin />
              </div>

              <h1 className="text-center font-light mt-4">
               Don't Have any account?{" "}
                <Link to="/register" className="text-color font-semibold font-manrope">
                  Register
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
