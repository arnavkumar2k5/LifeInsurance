import React from "react";

function Component5() {
  return (
    <div className="bg-white pt-64">
      <div className="w-[80%] m-auto flex flex-col justify-center gap-48">
        <div className="flex justify-center gap-28 items-center">
          <div className="w-1/2 flex flex-col gap-5 text-3xl">
            <div className="text-4xl font-bold mb-10">
              How much insurance coverage do you need?
            </div>
            <div>
              Ideally, you want to make sure your debts are covered, so you
              don't leave major expenses behind for your loved ones.
            </div>
            <div>
              Here are a few things to consider:
              <ul className="list-disc pl-8">
                <li>Your income</li>
                <li>Net worth</li>
                <li>Family needs</li>
                <li>Debt</li>
                <li>Other insurance you have</li>
              </ul>
            </div>
            <div className="pl-10 pr-10 p-3 rounded-2xl bg-cyan-400 w-1/3">
              Get a Quote
            </div>
          </div>
          <div>
            <img src="family3.png" alt="family" className="h-[70vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
