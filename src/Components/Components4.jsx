import React from "react";

function Components4() {
  return (
    <div className="flex flex-col justify-center m-auto pt-40 items-center p-40 bg-white">
      <div className="text-2xl text-center">
        <p className="text-5xl font-semibold mb-5">
          What kind of Life insurance is avaialble?
        </p>
        <p>
          There are 2 basic types of life insurance coverage: term and permanent
        </p>
        <p>Each has unique features designed to meet different needs.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-20 gap-10 text-xl">
        <div className="border-4 w-[40%] border-gray-200 p-10 h-[40vh]">
          <p className="text-2xl font-semibold mb-10">Term insurance</p>
          <p>
            It's temporary coverage that canlast 10,15, 20 or more years. It's
            initially acheaper option. But your premiums typically rise if you
            decide to renew your policy at the end of your term.
          </p>
          <p>
            Some term plans let you convert to permanent life insurance.
            Permanent insurance is more expensive than term, but most plans
            offer premiums that remain the same for the rest of your life.
          </p>
          <div className="flex justify-between mt-5">
            <ul className="list-disc pl-8">
              <li>Temporary coverage</li>
              <li>Lower cost</li>
              <li>Fixed payments</li>
              <li>Option to convert to permanent </li>
            </ul>
            <img src="hand.png" alt="hand" className="h-20 self-end" />
          </div>
        </div>
        <div className="border-4 w-[40%] p-10 border-gray-200 h-[40vh]">
          <p className="text-2xl font-semibold mb-10">Permanent insurance</p>
          <p>
            It'sinsurance coverage that lasts forever and never expires. There
            are three types of permanent life insurance: whole life,
            participating, and universal life.
          </p>
          <p>
            Some plans may also offer tax-preferred growthin your cash value and
            ways to increase the death benefit.
          </p>
          <div className="flex justify-between mt-5">
            <ul className="list-disc pl-8">
              <li>Lifetime coverage</li>
              <li>Highercost</li>
              <li>Flexible payments</li>
              <li>Opportunity to build cash value</li>
            </ul>
            <img src="wheel.png" alt="hand" className="h-20 self-end" />
          </div>
        </div>
      </div>
      <div className="flex mt-40">
        <div className="text-xl">
          <p className="text-4xl font-semibold mb-10">
            How to get life insurance
          </p>
          <p>
            Not sure what's right for you? An advisor can explain all your
            insurance
          </p>
          <p className="w-[98%]">
            options and help you figure out which products meet your needs and
            goals.
          </p>
          <button className="bg-cyan-500 text-white mt-10 p-5 pl-16 pr-16 rounded-full">
            Schedule Call
          </button>
        </div>
        <div className="text-xl mt-20">
          <p>Answer a few quick questions to get a quote for coverage up to</p>
          <p>$1,000,000.</p>
          <button className="bg-cyan-500 text-white mt-16 p-5 pl-10 pr-10 rounded-full">
            Get a quote Online
          </button>
        </div>
      </div>
    </div>
  );
}

export default Components4;
