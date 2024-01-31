import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
 
const Root = () => {
    return(
        <div>
             <div className="">
              <Navbar/>
             </div>
             <Outlet/>
        </div>
    )}
export default Root;