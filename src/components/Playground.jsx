import React from "react";
import background from "../assets/background.webp";
import { getLevel } from "../config/levels";
import FruitGrid from "./FruitGrid";
import BasketGrid from "./BasketGrid";

const Playground = ({ customCSS, level, isCorrect }) => {
  const levelConfig = getLevel(level);

  const getBasketGridStyle = () => {
    switch (levelConfig.containerLayout) {
      case "rows":
      case "auto-rows":
        return {
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateColumns: "1fr",
          gap: "1rem",
          pointerEvents: "none",
        };
      case "columns":
      case "auto-columns":
        return {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "1fr",
          gap: "1rem",
          pointerEvents: "none",
        };
      case "auto-flow":
        return {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 100px)",
          gap: "1rem",
          pointerEvents: "none",
        };
      default:
        return {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          pointerEvents: "none",
        };
    }
  };

  const getFruitGridStyle = () => {
    return (
      levelConfig.fruitCSS || {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }
    );
  };

  const basketGridStyle = getBasketGridStyle();
  const fruitGridStyle = getFruitGridStyle();

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
          <BasketGrid
            baskets={levelConfig.baskets}
            gridStyle={basketGridStyle}
            containerClass="absolute inset-0 px-16 py-20 lg:px-24 lg:py-24"
            level={level}
          />

          <FruitGrid
            fruits={levelConfig.fruits}
            gridStyle={fruitGridStyle}
            containerClass="absolute inset-0 px-16 py-20 lg:px-24 lg:py-24"
            customCSS={customCSS}
            level={level}
            isCorrect={isCorrect}
          />
        </div>
      </div>
    </div>
  );
};

export default Playground;
