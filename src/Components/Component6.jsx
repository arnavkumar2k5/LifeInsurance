import React from "react";

function Component6() {
  return (
    <div>
      <div className="w-[90%] m-auto flex flex-col gap-48 mt-40">
        <div className="flex justify-center gap-28 items-center">
          <div>
            <img src="women.png" alt="family" className="h-[60vh]" />
          </div>
          <div className="w-[34%] flex flex-col gap-5 text-2xl">
            <div className="text-5xl font-semibold mb-10">
              How much do insurance cover costs?
            </div>
            <div>
              It depends on the type of coverage you choose. Generally, term
              insurance is more affordable than permanent insurance. But there
              are a lot of factors that determine the cost of your policy,
              including:
              <div>
                <span className="font-semibold">Age:</span> Generally, insurance
                is less expensive when you're younger.
              </div>
              <ul className="list-disc pl-8">
                <li>
                  {" "}
                  <span className="font-semibold">Health: </span>Family history,
                  chronic diseases and lifestyle can increase costs.
                </li>
                <li>
                  <span className="font-semibold">Gender:</span> Women live
                  longer than men on average, so insurance may cost less.
                </li>
                <li>
                  <span className="font-semibold">Occupation:</span> If you have
                  a dangerous job, your insurance costs can be higher.
                </li>
              </ul>
            </div>
            <div className="pl-10 pr-10 p-3 rounded-2xl bg-cyan-400 w-1/3">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
