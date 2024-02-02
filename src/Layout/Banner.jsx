
import table from '../assets/all_img/tablet 1.png'
import phoneOne from '../assets/all_img/phone 1.png'

const Banner = () => {
  return (
    <div className="max-w-[1440px] bg-cover bg-no-repeat bg-BackGround_one   top-0 right-0 left-0 -z-30 h-[950px] mx-auto  flex justify-center items-center">
      <div className="font-manrope border-b relative text-center">

        <h1 className="text-5xl font-bold leading-snug">Analytics that transform your <br/> product inside-out</h1>

        <div className="flex mb-28 mt-8 gap-4 justify-center items-center">
          <button className="bg-[#0052CC] rounded-lg py-3 px-8 text-white font-manrope">
          Request for Demo
          </button>

          <button className="border text-[#0052CC] border-[#0052CC] shadow-md shadow-[#0052CC] rounded-lg py-3 px-8  font-manrope">
            Download
          </button>
        </div>

        <div className="absolute ">
            <img className="shadow_img " src={table} alt="" />
            <img className=" w-52 absolute top-40 left-96" src={phoneOne} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
