import React from "react";

function Component3() {
  return (
    <div className="flex flex-col justify-center text-center bg-white pt-40 h-screen">
      <div className="text-xl">
        <p className="text-5xl font-semibold">What people say</p>
        <p className="mt-5">Our coustomer are our top propority</p>
        <p>Let's hear what they have to say.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 text-start text-2xl mt-40">
        <div className="shadow-2xl border-2 w-[17%] p-5 pt-10 rounded-3xl mb-40">
          <div>
            “Great service, very easy and well explained procedures and
            information needed for insurance. Greg was great to work with, and
            had excellent communication skills. 10/10 recommend.”
          </div>
          <div className="flex mt-24 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xl">- Palakas Fotini</div>
          </div>
        </div>
        <div className="shadow-2xl border-2 w-[17%] p-5 pt-10 rounded-3xl mt-40">
          <div className="w-[95%]">
            Greg is always making sure all my insurance needs are covered.
            Excellent service and very responsive.. thanks again!
          </div>
          <div className="flex mt-40 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xl">- Palakas Fotini</div>
          </div>
        </div>
        <div className="shadow-2xl border-2 w-[17%] p-5 pt-10 rounded-3xl mb-40">
          <div className="w-[95%]">
            Greg is always making sure all my insurance needs are covered.
            Excellent service and very responsive.. thanks again!
          </div>
          <div className="flex mt-40 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xl">- Dirk Michon</div>
          </div>
        </div>
        <div className="shadow-2xl border-2 w-[17%] p-5 pt-10 rounded-3xl mt-40">
          <div className="w-[95%]">
            Greg is always making sure all my insurance needs are covered.
            Excellent service and very responsive.. thanks again!
          </div>
          <div className="flex mt-40 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xl">- Derpina Wickers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
