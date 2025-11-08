import React from "react";
import background from "../assets/background.webp";
import { getLevel } from "../config/levels";
import { getFlexLevel } from "../config/flexLevels";
import FruitGrid from "./FruitGrid";
import BasketGrid from "./BasketGrid";

import apple from "../assets/apple.webp";
import banana from "../assets/banana.webp";
import grapes from "../assets/grapes.webp";
import red_basket from "../assets/red_basket.webp";
import violet_basket from "../assets/violet_basket.webp";
import yellow_basket from "../assets/yellow_basket.webp";

const fruitImages = {
  apple: apple,
  banana: banana,
  grapes: grapes,
};

const basketImages = {
  red: red_basket,
  violet: violet_basket,
  yellow: yellow_basket,
};

const Playground = ({ customCSS, level, mode = "grid", isCorrect }) => {
  const levelConfig = mode === "grid" ? getLevel(level) : getFlexLevel(level);

  const getBasketContainerStyle = () => {
    const baseStyle = {
      position: "absolute",
      inset: 0,
      padding: "5rem 4rem", 
    };

    if (mode === "flexbox") {
      return { ...baseStyle, ...levelConfig.basketCSS };
    } else {
      switch (levelConfig.containerLayout) {
        case "rows":
        case "auto-rows":
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          };
        case "columns":
        case "auto-columns":
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "1fr",
            gap: "1rem",
          };
        case "auto-flow":
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 100px)",
            gap: "1rem",
          };
        default:
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          };
      }
    }
  };

  const getFruitContainerStyle = () => {
    const baseStyle = {
      position: "absolute",
      inset: 0,
      padding: "5rem 4rem", 
    };

    if (mode === "flexbox") {
      const userCSS = parseCustomCSS(customCSS);
      
      if (isCorrect === true) {
        return { ...baseStyle, ...levelConfig.basketCSS };
      } else {
        return { ...baseStyle, ...levelConfig.fruitCSS, ...userCSS };
      }
    } else {
      switch (levelConfig.containerLayout) {
        case "rows":
        case "auto-rows":
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          };
        case "columns":
        case "auto-columns":
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "1fr",
            gap: "1rem",
          };
        case "auto-flow":
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 100px)",
            gap: "1rem",
          };
        default:
          return {
            ...baseStyle,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          };
      }
    }
  };

  const parseCustomCSS = (css) => {
    const style = {};
    if (css) {
      const cssText = css.replace(/\n/g, " ").trim();
      const props = cssText.split(";").filter((p) => p.trim());
      props.forEach((prop) => {
        const [key, value] = prop.split(":").map((s) => s.trim());
        if (key && value) {
          const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          style[camelKey] = value;
        }
      });
    }
    return style;
  };

  const basketContainerStyle = getBasketContainerStyle();
  const fruitContainerStyle = getFruitContainerStyle();

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
            style={{
              ...basketContainerStyle,
              zIndex: 1,
            }}
          >
            {levelConfig.baskets.map((basket, index) => (
              <div
                key={`basket-${index}`}
                className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt={`${basket.type} basket`}
                  className="animate-pulse drop-shadow-2xl opacity-70"
                  src={basketImages[basket.type]}
                />
              </div>
            ))}
          </div>
          
          <div style={{
            ...fruitContainerStyle,
            zIndex: 2,
          }}>
            {levelConfig.fruits.map((fruit, index) => (
              <div
                key={`fruit-${index}`}
                className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
              >
                <img
                  alt={`${fruit.type}`}
                  className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
                  src={fruitImages[fruit.type]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
