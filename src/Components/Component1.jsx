import React from "react";

function Component1() {
  return (
    <div className="bg-white ">
      <div className="w-[90%] m-auto flex flex-col gap-48">
        <div className="flex justify-center items-center gap-96">
          <div className="flex flex-col text-3xl">
            <span className="w-full font-semibold">
              Get instant travel insurance quotes
            </span>
            <span>from 20 of Canada's Top Insurers</span>
          </div>
          <div>
            <img src="family1.png" alt="family1" />
          </div>
        </div>
        <div className="flex justify-center gap-28 items-center">
          <div>
            <img src="family.png" alt="family" className="h-[80vh]" />
          </div>
          <div className="w-[35%] flex flex-col gap-5 text-2xl">
            <div className="text-5xl font-bold">
              Insurance for Life and terms
            </div>
            <div>
              <div>
                We like to hope for the best, but preparing for the worst has
                its perks too. Because mortgages, education costs, medical costs
                and other bills they'll still be there after you're gone.
              </div>
              Life insurance provides whomever you choose with a one-time,
              tax-free payment when you die, as long as you continue to pay your
              premiums.
            </div>
            <div>
              There are different types of life insurance, and different ways to
              make it work for you. It's not only to protect your family. It can
              also be part of your financial plan, so you may be able to access
              money in your policy while you're alive. Loved one's might use
              this amount to
              <ul className="list-disc pl-8">
                <li>
                  replace your income to allow family to maintain their standard
                  of living
                </li>
                <li>provide for your children or dependents</li>
                <li>pay for your funeral expenses</li>
                <li>pay off your debts</li>
                <li>make a donation to charity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
