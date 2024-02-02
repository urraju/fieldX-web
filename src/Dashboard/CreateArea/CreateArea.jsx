import useAxiosPublic from "../../Shared/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Region = () => {
    const navigate = useNavigate()
  const axiosPublic = useAxiosPublic();
//   const { data: users = [] } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/users");
//       return res.data;
//     },
//   });

  const createAreRegion = (e) => {
    e.preventDefault();
    const form = e.target
    const regio = form.regio.value
    const area = form.area.value
    const userInfo = {
       regio :  regio,
       area : area,
    }
    axiosPublic.post("/area", userInfo)
    .then((res) => {
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
        navigate("/dashboard/area");
        
      });
  }

  return (
    <div>
      <div className="w-full p-8">
        <p className="font-manrope text-xl font-bold ">Create Area</p>
        <div className="flex py-3 items-center gap-2">
          Geo <MdKeyboardArrowRight className="text-xl" />
          <NavLink
            to="/dashboard/area"
            className={({ isActive }) =>
              isActive
                ? "text-color  font-manrope font-semibold "
                : "font-manrope   "
            }
          >
            Geo List
          </NavLink>
          <MdKeyboardArrowRight className="text-xl" />
          <NavLink
            to="/dashboard/area"
            className={({ isActive }) =>
              isActive
                ? "text-color  font-manrope font-semibold "
                : "font-manrope font-semibold text-color "
            }
          >
             Create Geo
          </NavLink>
        </div>
    
        <div className=" w-1/2  mt-10 mx-auto bg-white p-5 rounded-md shadow-[#0052cc07]">
           
           <form onSubmit={createAreRegion}
           className="flex flex-col gap-3">
            <label className="text-lg font-semibold py-2 mb-2 font-manrope" >
                Region
            <select
            className="w-full outline-none  border rounded-lg px-2 font-light text-sm py-2 mt-3"
             name="regio">
                <option value="select region">Select Region</option>
                <option value="dhaka">Dhaka</option>
                <option value="ctg">CTG</option>
                <option value="dhaka">Dhaka</option>
                <option value="syhlet">Syhlet</option>
                <option value="dhaka">Dhaka</option>
                <option value="dhaka">Dhaka</option>
                <option value="dhaka">Dhaka</option>
                <option value="dhaka">Dhaka</option>
            </select>
            </label>

            <label className="text-lg font-semibold   font-manrope" >
                Area
            <input
              className="w-full mt-2 outline-none border rounded-lg px-2 font-light text-sm  py-2"
              name="area"
             type="text"
             placeholder="Type Area" 
             />
            </label>
            <div className="flex justify-end py-5">
                <button type="submit" className="bg-[#0B2E4E] py-2 px-10 text-white font-manrope rounded-lg">Add Area</button>
            </div>
           </form>

        </div>
      </div>
    </div>
  );
};
export default Region;

