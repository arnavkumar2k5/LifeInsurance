import React from "react";

function Form() {
  return (
    <div className="p-8 md:pl-16 text-sm md:text-lg md:pr-16 md:p-10 shadow-2xl md:rounded-3xl bg-white">
      <form action="" className="flex flex-col gap-5 md:font-medium">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Your name</label>
          <input type="text" placeholder="Your name" className="form-input" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="buy">Planning to buy</label>
          <select name="week" id="week" className="form-input">
            <option value="1week">1-2 weeks</option>
            <option value="2week">2-3 weeks</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact">
            Contact number <span className="text-red-600">*</span>
          </label>
          <div className="form-input flex">
            <select name="country" id="country" className="bg-transparent">
              <option value="+1">+40</option>
              <option value="+1">+91</option>
            </select>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Contact number"
              className="bg-transparent focus:outline-none w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Get a Free quote"
          className="bg-cyan-400 text-white hover:text-black p-5 rounded-full hover:bg-white hover:border-black hover:border-2 cursor-pointer h-16 text-xl"
        />
        <div>
          I agree to{" "}
          <span className="underline cursor-pointer hover:text-cyan-400">
            terms of use
          </span>{" "}
          and{" "}
          <span className="underline cursor-pointer hover:text-cyan-400">
            privacy policy
          </span>
          when getting a free quote from
        </div>
      </form>
    </div>
  );
}

export default Form;
