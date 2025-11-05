import React from "react";
import background from "../assets/background.webp";
import apple from "../assets/apple.webp";
import grapes from "../assets/grapes.webp";
import banana from "../assets/banana.webp";
import red_basket from "../assets/red_basket.webp";
import violet_basket from "../assets/violet_basket.webp";
import yellow_basket from "../assets/yellow_basket.webp";

const Playground = () => {
  return (
    <div className="p-16 relative">
      <div
        className="relative mx-auto h-[300px] w-[300px] rounded-xl bg-cover lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px]"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="relative mx-auto h-full w-[98%] max-w-[1000px] lg:ml-0 lg:mr-auto">
          <div id="container" className="flex h-full px-16 py-20 lg:p-24">
            <div id="apple" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={apple}
              />
            </div>
            <div id="grapes" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={grapes}
              />
            </div>
            <div id="apple" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={apple}
              />
            </div>
            <div id="grapes" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={grapes}
              />
            </div>
            <div id="grapes" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={grapes}
              />
            </div>
          </div>
          <div
            id="master"
            className="absolute inset-0 flex px-16 py-20 lg:p-24"
          >
            <div id="red" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src={red_basket}
              />
            </div>
            <div id="violet" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src={violet_basket}
              />
            </div>
            <div id="red" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src={red_basket}
              />
            </div>
            <div id="violet" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src={violet_basket}
              />
            </div>
            <div id="violet" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src={violet_basket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
