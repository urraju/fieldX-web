import React from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HelmetUse from "../Shared/HelmetUse";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../Shared/useAuth";
import useAxiosPublic from "../Shared/useAxiosPublic";
const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { registation } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registation(data.email, data.password).then((result) => {
      console.log(result.data);
      const userInfo = {
        name: data.name,
        email: data.email,
        id : data.id,
        phoneNumber : data.phoneNumber,
        password : data.password,
        confirmPassword : data.passwordConfirm,
        role : data.role
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          console.log("user added to database");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registation Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(location.state ? location.state : "/");
        reset()
      });
      
    });
  };

  return (
    <div className="md:py-10 bg-BackGround_one bg-cover bg-no-repeat">
      <HelmetUse helmet={"Register"} />
      <div className=" max-w-7xl mx-auto mt-20">
        <div className="flex flex-col p-3 md:flex-row-reverse items-center justify-center md:gap-20">
          <div className=" rounded-2xl    bg-white font-hebo w-full md:w-1/3 p-10">
            <h1 className="text-center font-manrope font-semibold text-3xl">
              Create Account
            </h1>
            <p className="text-center text-sm text-gray-500 mt-2">
              Fill in the details below to create an account
            </p>
            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                  <input
                    className="block mb-3 outline-none text-gray-700   py-2 rounded mt-2 border-b w-full"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Your Full Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600 block">
                      This name is required
                    </span>
                  )}
                </label>
                <label htmlFor="">
                  <input
                    className="block mb-3 outline-none text-gray-700  py-2 rounded mt-2 border-b w-full"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 block">
                      This email is required
                    </span>
                  )}
                </label>

                <label htmlFor="">
                  <input
                    className="block mb-3 outline-none text-gray-700  py-2 rounded mt-2 border-b w-full"
                    type="text"
                    name="id"
                    id=""
                    placeholder="Your ID"
                    {...register("id", { required: true })}
                  />
                  {errors.id && (
                    <span className="text-red-600 block">
                      This  id is required
                    </span>
                  )}
                </label>

                <label htmlFor="">
                  <input
                    className="block mb-3 outline-none text-gray-700 py-2 rounded mt-2 border-b w-full"
                    type="number"
                    name="phoneNumber"
                    id=""
                    placeholder="Your Phone Number"
                    {...register("phoneNumber", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  {errors.number && (
                    <span className="text-red-600 block">
                      This number is required
                    </span>
                  )}
                </label>
                <label htmlFor="">
                  <input
                    className="block mb-3 outline-none text-gray-700  py-2 rounded mt-2 border-b w-full"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-600 block">
                      This password is required
                    </span>
                  )}
                </label>
                <label htmlFor="">
                  <input
                    className="block mb-3 outline-none text-gray-700 py-2 rounded mt-2 border-b w-full"
                    type="password"
                    name="passwordConfirm"
                    id=""
                    placeholder="Confirm Password"
                    {...register("passwordConfirm", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-600 block">
                      This password is required
                    </span>
                  )}
                </label>

                
                <select
                className="block mb-3 outline-none text-gray-700 py-2 rounded mt-2 border-b w-full"
                 {...register("role")}>
                  <option className="text-gray-700" value="female">Select Your Role</option>
                  <option value="hub">Hub</option>
                  <option value="hub">Hub</option>
                  <option value="hub">Hub</option>
                   
                </select>

                <button
                  type="submit"
                  className="bg-[#0052CC] font-manrope  text-white w-full py-2 rounded"
                >
                  Create Account
                </button>
                <h1 className="text-sm font-light mt-3 text-center">
                  or Sign up with
                </h1>
              </form>

              <div className="flex items-center justify-center gap-3 mt-4">
                <BsFacebook className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
                <BsLinkedin className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
                {/* <BsGoogle className="h-8 w-8 p-2 bg-gray-200 text--600 rounded-full" /> */}
                <SocialLogin />
              </div>

              <h1 className="text-center font-light mt-4">
                Already Have an account?{" "}
                <Link to="/login" className="text-color font-semibold">
                  Sign In
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
