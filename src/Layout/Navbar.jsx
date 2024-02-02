import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import useAuth from "../Shared/useAuth";
import logo from '../assets/all_img/FieldX (1).png'
const Navbar = () => {
    const {user} = useAuth()
    return(
        <div className='relative'>
            
            <div className="flex absolute top-0 left-0 right-0 justify-between z-30 items-center max-w-screen-xl mx-auto border-b border-[#0052CC] border-opacity-20  py-5">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="flex gap-4 items-center">

                   {user ?  <Link to='/dashboard/emptypage'><MdDashboard className="text-3xl text-color"/></Link> : ''}

                   <Link to='/login'> <button className='bg-[#0052CC] rounded-md py-1 px-5 text-white font-manrope'>Login</button></Link>
                    
                   <Link to='/register'> <button className='border text-[#0052CC] border-[#0052CC] shadow-md shadow-[#0052CC] rounded-md py-1 px-5  font-manrope'>Register</button></Link>

                </div>
            </div>

        </div>
    )}
export default Navbar;