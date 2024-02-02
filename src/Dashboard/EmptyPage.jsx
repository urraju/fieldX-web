import { Link } from "react-router-dom";
import emptyFile from "../assets/all_img/emptyFIle.png";

const EmptyPage = () => {
  return (
    <div className="flex  bg-white w-3/4 mt-10 h-1/2 rounded-xl mx-auto justify-center  flex-col items-center">
    <div className=" ">
    <img src={emptyFile} alt="" />
      <p className="text-2xl font-manrope my-5 text-gray-500">Currently you have no Data. <br/> For next step first <span className="text-xl font-semibold text-color"><Link to='/dashboard/createarea'>Create Region</Link></span></p>
    </div>
    </div>
  );
};
export default EmptyPage;
