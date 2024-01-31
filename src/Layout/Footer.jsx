import { FaTwitter,FaLinkedinIn,FaFacebookF   } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="bg-[#00193D] h-[500px] w-[1440px] mx-auto flex justify-center items-center">
             <div>
                    <img className="mx-auto mt-16" src="/src/assets/All_img/FieldX (2).png" alt="" />
                    <p className=" text-white mt-7 text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam eaque.</p>
                    <div className="flex mt-7 justify-center items-center gap-7">
                        <span ><FaTwitter className=" w-10 h-10 text-black rounded-full bg-white p-2" /></span>

                        <span ><FaLinkedinIn className=" w-10 h-10 text-black rounded-full bg-white p-2" /></span>

                        <span ><FaFacebookF className=" w-10 h-10 text-black rounded-full bg-white p-2" /></span>
                    </div>
                    <p className="text-white text-center mt-32 py-5 text-lg">&copy; All rights reserve by <span className="text-[#F60E0E] ">MAAC</span></p>
             </div>
        </div>
    )}
export default Footer;