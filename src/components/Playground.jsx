import React from "react";
import background from "../assets/background.webp";

const Playground = () => {
  return (
    <div className="p-16">
      <div
        className="relative mx-auto h-[300px] w-[300px] rounded-xl bg-cover lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px]"
        style={{ backgroundImage: `url("${background}")`, backgroundPosition: "center center" }}
      >
        <img src={background} alt="" className="" />
        <div className="relative mx-auto h-full w-[98%] max-w-[1000px] lg:ml-0 lg:mr-auto">
          <div id="container" className="flex h-full px-16 py-20 lg:p-24">
            <div id="apple" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src="https://cdn.codehelp.in/fruitbox-flex/apple.webp"
              />
            </div>
            <div id="grapes" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src="https://cdn.codehelp.in/fruitbox-flex/grapes.webp"
              />
            </div>
            <div id="apple" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src="https://cdn.codehelp.in/fruitbox-flex/apple.webp"
              />
            </div>
            <div id="grapes" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src="https://cdn.codehelp.in/fruitbox-flex/grapes.webp"
              />
            </div>
            <div id="grapes" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="fruit"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src="https://cdn.codehelp.in/fruitbox-flex/grapes.webp"
              />
            </div>
          </div>
          <div id="master" className="absolute inset-0 flex px-16 py-20 lg:p-24">
            <div id="red" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src="https://cdn.codehelp.in/fruitbox-flex/red_basket.webp"
              />
            </div>
            <div id="violet" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src="https://cdn.codehelp.in/fruitbox-flex/violet_basket.webp"
              />
            </div>
            <div id="red" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src="https://cdn.codehelp.in/fruitbox-flex/red_basket.webp"
              />
            </div>
            <div id="violet" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src="https://cdn.codehelp.in/fruitbox-flex/violet_basket.webp"
              />
            </div>
            <div id="violet" className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="basket"
                className="animate-pulse drop-shadow-2xl"
                src="https://cdn.codehelp.in/fruitbox-flex/violet_basket.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
