import React from "react";
import Form from "../Components/Form";
import Info from "../Components/Info";
import Component1 from "../Components/Component1";
import Component8 from "../Components/Component8";
import Component9 from "../Components/component9";
import Component2 from "../Components/Component2";
import Component3 from "../Components/Component3";
import Components4 from "../Components/Components4";
import Component5 from "../Components/Component5";
import Component6 from "../Components/Component6";
import Component7 from "../Components/Component7";
import Coverage from "../Components/Coverage";

function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col md:flex-row justify-center items-center m-auto md:pl-56 md:pr-52 pt-24 mb-40"
        id="/"
      >
        <div >
          <Info />
        </div>
        <div >
          <Form />
        </div>
      </div>
      <div>
        <Component1 />
      </div>
      <div>
        <Component2 />
      </div>
      <div>
        <Coverage />
      </div>
      <div>
        <Component3 />
      </div>
      <div>
        <Components4 />
      </div>
      <div>
        <Component5 />
      </div>
      <div>
        <Component6 />
      </div>
      <div>
        <Component7 />
      </div>
      <div className="bg-white">
        <Component8 />
      </div>
      <div>
        <Component9 />
      </div>
    </div>
  );
}

export default Home;
