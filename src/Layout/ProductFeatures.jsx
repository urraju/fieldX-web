import phoneTow from '../assets/all_img/phoneTwo.png'
import box from '../assets/all_img/box.png'
const ProductFeatures = () => {
    return(
        <div className="mt-96 my-20 max-w-[1400px] mx-auto">
             <div className="text-center font-manrope border-t py-16">
                <p className="text-lg mb-5 text-color">Products Features</p>
                <p className="text-4xl font-semibold">Make more out of your data</p>
             </div>
             {/* Product-main */}
             <div className="max-w-screen-xl flex flex-col md:flex-row  justify-center mx-auto">
                    <div className="flex-1 text-right">
                    <div className="mb-10">
                        <img className="w-12 h-12  ml-[284px] bg-white shadow border p-2 rounded-xl" src={box} alt="" />
                        <p className="text-2xl font-semibold mb-4 mt-4">Real-time analytics</p>
                        <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div className="mb-10">
                    <img className="w-12 h-12  ml-[284px] bg-white shadow border p-2 rounded-xl" src={box} alt="" />
                        <p className="text-2xl font-semibold mb-4 mt-4">Intuitive dashboard</p>
                        <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div className="mb-10">
                    <img className="w-12 h-12  ml-[284px] bg-white shadow border p-2 rounded-xl" src={box} alt="" />
                        <p className="text-2xl font-semibold mb-4 mt-4">Smart suggestions</p>
                        <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    </div>

                    {/* img section  */}
                    <div className="relative flex-grow ">
                        <img className="image_shadow w-72 mx-auto rounded-3xl object-contain" src={phoneTow} alt="" />
                        <div className="w-[450px] h-[450px] top-[70px] -z-30 right-0 left-[85px] absolute rounded-full bg-[#0052CC]"></div>
                    </div>

                    {/* text-part  */}

                    <div className="flex-1">
                    <div className="mb-10">
                    <img className="w-12 h-12   bg-white shadow border p-2 rounded-xl" src={box} alt="" />
                        <p className="text-2xl font-semibold mb-4 mt-4">Multiple views</p>
                        <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div className="mb-10">
                    <img className="w-12 h-12   bg-white shadow border p-2 rounded-xl" src={box} alt="" />
                        <p className="text-2xl font-semibold mb-4 mt-4">AI-led diagnoses</p>
                        <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    <div className="mb-10">
                    <img className="w-12 h-12   bg-white shadow border p-2 rounded-xl" src={box} alt="" />
                        <p className="text-2xl font-semibold mb-4 mt-4">Responsive</p>
                        <p>See product usage, sign-ins, feature <br /> metrics change as users work on your.</p>
                    </div>
                    </div>
             </div>
        </div>
    )}
export default ProductFeatures;