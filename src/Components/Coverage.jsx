import React from "react";

function Coverage() {
  return (
    <div className="bg-gradient-to-r from-[#0f6476] to-[#133e4e] h-[30rem] flex items-center justify-center gap-[40rem] px-10">
      <div className="text-white">
        <h2 className="text-5xl font-semibold">
          Simple coverage you can trust
        </h2>
        <p className="mt-4 text-2xl">
          Our team is always up for dishing out more details.
        </p>
        <button className="mt-6 px-10 text-4xl p-7 border-4 rounded-lg border-white text-white hover:bg-white hover:text-teal-900 transition-all">
          Schedule a call
        </button>
      </div>
      <div>
        <img src="woman.png" alt="woman" className="pb-[5.6rem] h-[60vh]" />
      </div>
    </div>
  );
}

export default Coverage;
