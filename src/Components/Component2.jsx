import React from "react";

function Component2() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[95%] md:w-[90%] gap-20 md:gap-40 pt-20 md:pt-40 pb-20 md:pb-40">
        <div className="text-sm text-center">
          <div className="text-2xl md:text-3xl font-bold">Why Choose B-Insure</div>
          <p className="text-xs md:text-sm text-gray-600 max-w-[25rem] md:max-w-[33rem] mx-auto mt-4">
            We help Canada's small business owners save time and money by providing a convenient and affordable way to buy business insurance.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap text-xs md:text-sm gap-10 justify-center items-center">
          <div className="border-2 border-gray-400 rounded-lg p-5 flex flex-col gap-5 md:gap-10 w-full md:w-1/5">
            <div className="text-lg font-bold">Made for Canadians</div>
            <p>
              We celebrate what makes Canadians different. And we're committed to providing insurance designed for your needs.
            </p>
            <div className="flex justify-end">
              <img src="farmer.png" alt="farmer" className="h-16 md:h-20" />
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-lg p-5 flex flex-col gap-5 md:gap-10 w-full md:w-1/5">
            <div className="text-lg font-bold">Insurance made simple</div>
            <p>
              Go direct and get coverage without tons of confusing forms or medical tests. Because no one needs more paperwork in their life.
            </p>
            <div className="flex justify-end">
              <img src="umbrella.png" alt="umbrella" className="h-14 md:h-16 mt-3" />
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-lg p-5 w-full md:w-1/5">
            <div className="text-lg font-bold mb-5 md:mb-10">Flexible coverage</div>
            <p>
              Our Canadian-based licensed advisors can guide you on the best coverage for your needs. We're here to support your insurance journey from start to finish.
            </p>
            <div className="flex justify-end mt-5">
              <img src="um.png" alt="advisor" className="h-14 md:h-16 mt-3" />
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-lg p-5 w-full md:w-1/5">
            <div className="text-lg font-bold mb-5 md:mb-10">Trusted experience</div>
            <p>
              Your policy is backed by an insurer with decades of experience protecting Canadians. You can be confident knowing you're in good hands (if we do say so ourselves).
            </p>
            <div className="flex justify-end">
              <img src="security.png" alt="security" className="h-14 md:h-16 mt-5 md:mt-8" />
            </div>
          </div>
        </div>

        <div className="bg-cyan-400 px-10 py-3 text-white text-lg md:text-xl rounded-full">
          Get Life Insure now!
        </div>
      </div>
    </div>
  );
}

export default Component2;
