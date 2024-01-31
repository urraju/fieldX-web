
const Navbar = () => {
    return(
        <div className='relative'>
            
            <div className="flex absolute top-0 left-0 right-0 justify-between z-30 items-center max-w-screen-xl mx-auto border-b border-[#0052CC] border-opacity-20  py-5">
                <div>
                    <img src="/src/assets/All_img/FieldX.png" alt="" />
                </div>
                <div className="flex gap-4">

                    <button className='bg-[#0052CC] rounded-lg py-1 px-5 text-white font-manrope'>Login</button>
                    
                    <button className='border text-[#0052CC] border-[#0052CC] shadow-md shadow-[#0052CC] rounded-lg py-1 px-5  font-manrope'>Register</button>

                </div>
            </div>

        </div>
    )}
export default Navbar;