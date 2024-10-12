import React from "react";

function Info() {
  return (
    <div className="flex flex-col gap-8 text-center p-3 md:p-2 md:text-start">
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="text-lg md:text-5xl font-normal">
          A financial safety net for your
        </div>
        <div className="text-lg md:text-5xl font-semibold">Loved Ones</div>
      </div>
      <div className="text-sm text-justify md:text-2xl md:w-[95%]">
        Help reassure your loved ones that they will be taken care of now and in
        the future. Get a personalized insurance quotes in 5 minutes.
      </div>
      <div className="text-lg text-start p-2 flex flex-col md:flex-row md:mr-44 gap-5">
        <div className="flex items-center text-sm md:text-xl gap-6 md:gap-0">
          <span className="md:w-[15%] ml-2 md:ml-0">
            <img src="nature.png" alt="" className="h-10 w-auto" />
          </span>
          <span className="md:w-[80%]">
            Trusted by over 10,000 Canadian small businesses.
          </span>
        </div>
        <div className="flex items-center text-sm md:text-xl gap-2 md:gap-0">
          <span className="md:w-1/2">
            <img src="money.png" alt="money" className="h-[3rem]" />
          </span>
          <span>Save up to 35% on your insurance</span>
        </div>
      </div>
      <div className="mt-8">
        <span className="p-3 md:p-5 md:pl-[3.5rem] cursor-pointer hover:bg-cyan-600 hover:text-white md:pr-[3.5rem] text-sm md:text-xl border-2 rounded-md bg-white text-cyan-600 font-bold border-cyan-600">
          How It Works
        </span>
      </div>
    </div>
  );
}

export default Info;
