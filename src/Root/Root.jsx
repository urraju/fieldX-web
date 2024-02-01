import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
 
const Root = () => {
    return(
        <div>
             <div className="">
              <Navbar/>
             </div>
             <Outlet/>
             <Footer/>
        </div>
    )}
export default Root;