import React from "react";
import red_basket from "../assets/red_basket.webp";
import violet_basket from "../assets/violet_basket.webp";
import yellow_basket from "../assets/yellow_basket.webp";
import { getLevel } from "../config/levels";

const basketImages = {
  red: red_basket,
  violet: violet_basket,
  yellow: yellow_basket,
};

const BasketGrid = ({ baskets, gridStyle, containerClass, level }) => {
  const levelConfig = getLevel(level);
  
  const getBasketPositioning = (basket) => {
    switch (levelConfig.containerLayout) {
      case "rows":
      case "auto-rows":
        return { gridRow: basket.position };
      default:
        return { gridColumn: basket.position };
    }
  };

  return (
    <div
      id="baskets"
      className={containerClass}
      style={gridStyle}
    >
      {baskets.map((basket, index) => (
        <div
          key={`basket-${index}`}
          className="h-10 w-10 lg:h-[70px] lg:w-[70px]"
          style={getBasketPositioning(basket)}
        >
          <img
            alt={`${basket.type} basket`}
            className="animate-pulse drop-shadow-2xl"
            src={basketImages[basket.type]}
          />
        </div>
      ))}
    </div>
  );
};

export default BasketGrid;