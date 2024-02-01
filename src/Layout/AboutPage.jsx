const AboutPage = () => {
  return (
    <div className="my-20 mt-44 ">
      <div className="bg-BackGround_one max-w-[1440px] mx-auto  -z-40 bg-no-repeat bg-cover bg-opacity-25 ">

        {/* dash part  */}
        <div className="flex justify-between  max-w-screen-xl mx-auto py-20">

          <div className=" relative z-30">
            <div className="bg-BackGround_three   -z-20 rounded-3xl  top-52 left-28 absolute h-60 w-[278px]"></div>
            <div className="bg-blue-50 rounded-3xl -z-30 top-20 left-16 absolute h-3/4 w-4/5"></div>

            <img
              className="mx-auto ml-24 h-max"
              src="/src/assets/All_img/dash-1.png"
              alt=""
            />

            <div className="flex">
              <img src="/src/assets/All_img/dash-2.png" alt="" />
              <img
                className="h-max image_shadow mt-5 rounded-2xl"
                src="/src/assets/All_img/dash-3.png"
                alt=""
              />
            </div>
          </div>
          {/* content part  */}
          <div className="mt-10 font-manrope">
            <p className="text-lg text-color font-semibold">About Us</p>

            <p className="text-5xl font-bold py-6 leading-tight">A dedicated solution for <br /> startups and enterprises</p>

            <p className="text-gray-500 py-7 text-lg border-b">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae ab illo inventore veritatis et quasi architecto <br />beatae vitae dicta sunt explicabo.</p>
            <div className="flex items-center gap-5 py-6">
                <img className="rounded-full" src="/src/assets/All_img/man.png" alt="" />
               <div className=" ">
               <p className="text-lg text-gray-500 font-semibold py-2">"Fieldx is for teams that care about <br /> their product growth."</p>
                <h1 className="text-xl font-bold">CEO, FieldX</h1>
               </div>
            </div>
          </div>
        </div>

        {/* prize section  */}
        <div className="grid grid-cols-2 md:grid-cols-4  max-w-screen-xl mx-auto py-16">

            <div className="text-center font-manrope">
                <img className="mx-auto" src="/src/assets/icon/monitor-mobbile.png" alt="" />
                <h1 className="text-color font-bold text-4xl py-4">10+</h1>
                <p className="text-lg text-gray-500 font-semibold">Platforms Created</p>
            </div>

            <div className="text-center font-manrope">
                <img className="mx-auto" src="/src/assets/icon/people.png" alt="" />
                <h1 className="text-color font-bold text-4xl py-4">1559+</h1>
                <p className="text-lg text-gray-500 font-semibold">Total Users</p>
            </div>

            <div className="text-center font-manrope">
                <img className="mx-auto" src="/src/assets/icon/user.png" alt="" />
                <h1 className="text-color font-bold text-4xl py-4">10+</h1>
                <p className="text-lg text-gray-500 font-semibold">Total Clients</p>
            </div>

            <div className="text-center font-manrope">
                <img className="mx-auto" src="/src/assets/icon/cup.png" alt="" />
                <h1 className="text-color font-bold text-4xl py-4">300 Days</h1>
                <p className="text-lg text-gray-500 font-semibold">In Operation</p>
            </div>

        </div>
      </div>
    </div>
  );
};
export default AboutPage;
