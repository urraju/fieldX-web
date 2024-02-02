
import useAxiosPublic from "../../Shared/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Area = () => {
  const axiosPublic = useAxiosPublic();
  const { data: area = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/area");
      return res.data;
    },
  });
  return (
    <div>
      <div className="w-full p-8">
        <p className="font-manrope text-xl font-bold "> Area List</p>
        <div className="flex py-3 items-center gap-2">
          Geo <MdKeyboardArrowRight className="text-xl" />
          <NavLink
            to="/dashboard/area"
            className={({ isActive }) =>
              isActive
                ? "text-color  font-manrope font-semibold "
                : "font-manrope font-semibold text-color "
            }
          >
            Geo List
          </NavLink>
        </div>
        <div className="flex mt-10 justify-end gap-4">
          
          <Link to='/dashboard/createarea'><button className="bg-[#0B2E4E] py-2 px-4 text-white font-manrope rounded-lg">+ Create New</button></Link>
       </div>
       

        <div className=" mt-10 mx-auto bg-white p-5 rounded-md shadow-[#0052cc07]">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-gray-200 bg-opacity-30  ">
                <tr className="rounded-t-xl">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>SI.NO.</th>
                  <th>Region</th>
                  <th>Area</th>
                </tr>
              </thead>
              <tbody className="">
                {area.map((item, index) => (
                  <tr key={item._id}>
                    <th>
                      <label className="text-sm">
                        <input type="checkbox" class="checkbox " />
                      </label>
                    </th>
                    <th>{index + 1}</th>
                    <th>{item.regio}</th>
                    <th>{item.area}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Area;
