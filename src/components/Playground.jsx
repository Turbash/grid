import React from "react";
import background from "../assets/background.webp";
import apple from "../assets/apple.webp";
import grapes from "../assets/grapes.webp";
import red_basket from "../assets/red_basket.webp";
import violet_basket from "../assets/violet_basket.webp";

const Playground = ({ customCSS }) => {
  const getItemStyle = () => {
    const style = {};
    if (customCSS) {
      const props = customCSS.split(";").filter((p) => p.trim());
      props.forEach((prop) => {
        const [key, value] = prop.split(":").map((s) => s.trim());
        if (key && value) {
          const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          style[camelKey] = value;
        }
      });
    }
    console.log("Applied styles:", style);
    return style;
  };

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
          <div
            id="baskets"
            className="absolute bottom-0 left-0 right-0 px-16 pb-20 lg:px-24 lg:pb-24"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
              pointerEvents: "none",
            }}
          >
            <div className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="red basket"
                className="animate-pulse drop-shadow-2xl"
                src={red_basket}
              />
            </div>
            <div className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="purple basket"
                className="animate-pulse drop-shadow-2xl"
                src={violet_basket}
              />
            </div>
            <div className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="red basket"
                className="animate-pulse drop-shadow-2xl"
                src={red_basket}
              />
            </div>
            <div className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="purple basket"
                className="animate-pulse drop-shadow-2xl"
                src={violet_basket}
              />
            </div>
            <div className="h-10 w-10 lg:h-[70px] lg:w-[70px]">
              <img
                alt="purple basket"
                className="animate-pulse drop-shadow-2xl"
                src={violet_basket}
              />
            </div>
          </div>

          <div
            id="container"
            className="absolute inset-0 px-16 py-20 lg:px-24 lg:py-24"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
              alignItems: "start", // Default alignment
            }}
          >
            <div
              id="item"
              className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
              style={getItemStyle()}
            >
              <img
                alt="apple"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={apple}
              />
            </div>
            <div
              id="item"
              className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
              style={getItemStyle()}
            >
              <img
                alt="grapes"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={grapes}
              />
            </div>
            <div
              id="item"
              className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
              style={getItemStyle()}
            >
              <img
                alt="apple"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={apple}
              />
            </div>
            <div
              id="item"
              className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
              style={getItemStyle()}
            >
              <img
                alt="grapes"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={grapes}
              />
            </div>
            <div
              id="item"
              className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
              style={getItemStyle()}
            >
              <img
                alt="grapes"
                className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                src={grapes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
