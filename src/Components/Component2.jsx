import React from "react";

function Component2() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-40 pt-40 pb-40">
        <div className="text-lg text-center">
          <div className="text-5xl font-semibold">Why Choose B-Insure</div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
            We help Canada small business owners save time and money by
            providing a convenient and affordable way to buy business insurance
          </p>
        </div>
        <div className="flex flex-row flex-wrap text-xl gap-10 justify-center">
          <div className="border-2 border-gray-400 rounded-lg p-10 flex flex-col gap-10 w-1/5">
            <div className="text-2xl font-bold">Made for Canadians</div>
            <p>
              We celebrate what makes Canadians different. And we're committed
              to providing insurance designed for your needs.
            </p>
            <div className="flex justify-end">
              <img src="farmer.png" alt="farmer" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-10 flex flex-col gap-10 w-1/5">
            <div className="text-2xl font-bold">Insurance made simple</div>
            <p>
              Go direct and get coverage without tons of confusing forms or
              medical tests. Because no one needs more paperwork in their life
            </p>
            <div className="flex justify-end">
              <img src="umbrella.png" alt="farmer" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-10 w-1/5">
            <div className="text-2xl font-bold mb-10">Flexible coverage</div>
            <p>
              Our Canadian-based licensed advisors can guide you on the best
              coverage for your needs. We're here to support your insurance
              journey from start to finish
            </p>
            <div className="flex justify-end mt-5">
              <img src="um.png" alt="farmer" className="h-20" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-10 w-1/5">
            <div className="text-2xl font-bold mb-10">Trusted experience</div>
            <p>
              Your policy is backed by an insurer with decades of experience
              protecting Canadians. You can be confident knowing you're in good
              hands (if we do say so ourselves).
            </p>
            <div className="flex justify-end">
              <img src="security.png" alt="farmer" />
            </div>
          </div>
        </div>
        <div className="bg-cyan-400 pl-24 pr-24 p-5 text-white text-xl rounded-full">
          Get Life Insure now!
        </div>
      </div>
    </div>
  );
}

export default Component2;
