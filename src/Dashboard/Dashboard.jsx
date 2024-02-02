import { Link, NavLink, Outlet } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import logo from '../assets/all_img/FieldX (1).png'
import profile from '../assets/all_img/user bg.png'
const Dashboard = () => {
    return(
        <div className="max-w-[1440px] mx-auto my-20">
             <div className="px-8 py-2  bg-white shadow-[#0052cc07] font-manrope shadow-xl flex items-center justify-between">
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className="flex gap-3 items-center">
                    <img className="h-max" src={profile} alt="" />
                    <select className="outline-none border-none px-2 font-semibold text-gray-500" >
                        <option value="henry">Henry</option>
                        <option value="ritiha">Ritiha</option>
                        <option value="rani">Rani</option>
                        <option value="john">John</option>
                    </select>
                </div>
             </div>

             {/* dashboard main  */}

          <div className="flex flex-col md:flex-row">
          <div className=" md:w-[400px]">
                <h1 className="font-manrope py-6 font-semibold text-sm uppercase text-gray-600">Menu</h1>
                <div className="flex items-center gap-5">
                    <CiLocationOn className="text-3xl text-gray-500"/>
                    <p className="font-manrope text-lg text-gray-500">Geo Information</p>
                </div>

                <div className="py-6 px-12 flex flex-col">
                <NavLink to='/dashboard/region' className={({ isActive }) => (isActive ? "text-color font-manrope font-semibold py-2" : "font-manrope font-semibold py-2")}>Region</NavLink>
                <NavLink to='/dashboard/area' className={({ isActive }) => (isActive ? "text-color  font-manrope font-semibold  py-2" : "font-manrope font-semibold  py-2")}> Area</NavLink>
                <NavLink to='/dashboard/users' className={({ isActive }) => (isActive ? "text-color font-manrope font-semibold  py-2" : "font-manrope font-semibold  py-2")}> Users</NavLink>
                </div>
             </div>

             {/* dashboard in  */}
             <div className="  background-color w-full h-screen">
                     
                <Outlet/>
             </div>
          </div>

        </div>
    )}
export default Dashboard;