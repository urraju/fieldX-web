const QuestionAns = () => {
  return (
    <div className="max-w-[1440px] relative mx-auto bg-BackGround_two h-screen bg-cover bg-no-repeat my-32">
      <div className="w-full h-full absolute bg-[#0052CC]  -z-30"></div>
      <div className=" font-manrope text-center py-24">
        <p className="text-gray-300 text-lg">Common Question</p>
        <p className="text-5xl font-bold text-white py-5">
          Frequently asked questions
        </p>
      </div>

      {/* main que and ans  */}
      <div className="flex gap-8 justify-center">
      {/* nuber 1one  */}
        <div className="font-manrope w-[500px] flex flex-col gap-5">

          <div className="collapse p-3 rounded-xl collapse-arrow bg-base-200">

            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl font-medium">
            What kind of data can I see in FieldX?
            </div>

            <div className="collapse-content">
              <p className="text-gray-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in voluptate.</p>
            </div>

          </div>
            {/* 2number  */}
          <div className="collapse rounded-xl collapse-arrow bg-base-200">

            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title text-xl font-medium">
             Does Bizzy read my customers' data?
            </div>

            <div className="collapse-content">
            <p className="text-gray-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in voluptate.</p>
            </div>
          </div>
          {/* 3 number  */}
          <div className="collapse rounded-xl collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title text-xl font-medium">
            What's your refund and cancellation policy?
            </div>

            <div className="collapse-content">
            <p className="text-gray-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in voluptate.</p>
            </div>

          </div>
        </div>

         <div className="font-manrope w-[500px] flex flex-col gap-5">

          <div className="collapse p-3 rounded-xl collapse-arrow bg-base-200">

            <input type="radio" name="my-accordion-2" checked="checked" />

            <div className="collapse-title text-xl font-medium">
            How do you take payments?
            </div>

            <div className="collapse-content">
              <p className="text-gray-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in voluptate.</p>
            </div>

          </div>
            {/* 2number  */}
          <div className="collapse rounded-xl collapse-arrow bg-base-200">

            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title text-xl font-medium">
            Can I also track website analytics on fieldX?
            </div>

            <div className="collapse-content">
            <p className="text-gray-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in voluptate.</p>
            </div>
          </div>
          {/* 3 number  */}
          <div className="collapse rounded-xl collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title text-xl font-medium">
            What makes Bizzy different from other analytics tools?
            </div>

            <div className="collapse-content">
            <p className="text-gray-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in voluptate.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
export default QuestionAns;
