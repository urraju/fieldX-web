import { Link, Outlet } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const Dashboard = () => {
    return(
        <div className="max-w-[1440px] mx-auto my-20">
             <div className="px-8 py-2  bg-white shadow-[#0052cc0f] font-manrope shadow-xl flex items-center justify-between">
                <img src="/src/assets/All_img/FieldX.png" alt="" />
                <div className="flex gap-3 items-center">
                    <img className="h-max" src="/src/assets/All_img/user bg.png" alt="" />
                    <select className="outline-none border-none px-2 font-semibold text-gray-500" >
                        <option value="henry">Henry</option>
                        <option value="ritiha">Ritiha</option>
                        <option value="rani">Rani</option>
                        <option value="john">John</option>
                    </select>
                </div>
             </div>

             {/* dashboard main  */}

          <div className="flex">
          <div className=" md:w-[400px]">
                <h1 className="font-manrope py-6 font-semibold text-sm uppercase text-gray-600">Menu</h1>
                <div className="flex items-center gap-5">
                    <CiLocationOn className="text-3xl text-gray-500"/>
                    <p className="font-manrope text-lg text-gray-500">Geo Information</p>
                </div>

                <div className="py-6 px-12 flex flex-col">
                <Link><p className="text-black font-semibold mb-3">Region</p></Link>
                <Link><p className="text-black font-semibold mb-3">Area</p></Link>
                <Link><p className="text-black font-semibold mb-3">Users</p></Link>
                </div>
             </div>

             {/* dashboard in  */}
             <div className="  background-color w-full h-screen">
                    <p>lorem</p>
                <Outlet/>
             </div>
          </div>

        </div>
    )}
export default Dashboard;