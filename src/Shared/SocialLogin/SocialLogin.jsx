
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../useAxiosPublic";
import useAuth from "../useAuth";

const SocialLogin = () => {
  const { google } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic()
  const handleGoogle = () => {
    google().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          navigate(location.state ? location.state : "/");
        }
      });
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogle}
        className=" h-8 cursor-pointer w-8 p-2 rounded-full bg-gray-200"
      >
        <FaGoogle className="text-yellow-500" />
      </div>
    </div>
  );
};
export default SocialLogin;
