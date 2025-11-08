import React from "react";
import FruitItem from "./FruitItem";
import { getLevel } from "../config/levels";
import { getFlexLevel } from "../config/flexLevels";

const FruitGrid = ({
  fruits,
  gridStyle,
  containerClass,
  customCSS,
  level,
  mode = "grid",
  isCorrect,
}) => {
  const levelConfig = mode === "grid" ? getLevel(level) : getFlexLevel(level);

  const parseCustomCSS = () => {
    const style = {};
    if (customCSS) {
      const cssText = customCSS.replace(/\n/g, " ").trim();

      if (cssText.includes("grid-template-areas")) {
        const match = cssText.match(/grid-template-areas\s*:\s*(.+?)(?:;|$)/);
        if (match) {
          style.gridTemplateAreas = match[1].trim();
        }
      } else if (cssText.includes("grid-template:")) {
        const match = cssText.match(/grid-template\s*:\s*(.+?)(?:;|$)/);
        if (match) {
          style.gridTemplate = match[1].trim();
        }
      } else {
        const props = cssText.split(";").filter((p) => p.trim());
        props.forEach((prop) => {
          const [key, value] = prop.split(":").map((s) => s.trim());
          if (key && value) {
            const camelKey = key.replace(/-([a-z])/g, (g) =>
              g[1].toUpperCase()
            );
            style[camelKey] = value;
          }
        });
      }
    }
    return style;
  };

  const userCSS = parseCustomCSS();

  const getPositionProperty = () => {
    switch (levelConfig.containerLayout) {
      case "rows":
      case "auto-rows":
        return "gridRow";
      default:
        return "gridColumn";
    }
  };

  const getPositionValue = (fruit, useCorrect) => {
    const position = useCorrect ? fruit.correctPosition : fruit.initialPosition;
    return position;
  };

  const containerStyle =
    levelConfig.cssTarget === "container"
      ? isCorrect === true
        ? { ...gridStyle, ...levelConfig.basketCSS }
        : { ...gridStyle, ...levelConfig.fruitCSS, ...userCSS }
      : { ...gridStyle, ...levelConfig.fruitCSS };

  return (
    <div id="container" className={containerClass} style={containerStyle}>
      {fruits.map((fruit, index) => {
        let fruitStyle = {};
        
        if (mode === "flexbox") {
          if (levelConfig.cssTarget === "item") {
            fruitStyle = { ...userCSS };
          }
        } else {
          const positionProperty = getPositionProperty();

          if (isCorrect === true) {
            if (levelConfig.cssTarget === "item") {
              fruitStyle = { ...userCSS };
              fruitStyle[positionProperty] = getPositionValue(fruit, true);
            } else {
              fruitStyle[positionProperty] = getPositionValue(fruit, true);
            }
          } else {
            if (levelConfig.cssTarget === "item") {
              fruitStyle = { ...userCSS };
            } else {
              fruitStyle[positionProperty] = getPositionValue(fruit, false);
            }
          }
        }

        return (
          <FruitItem
            key={`fruit-${index}`}
            type={fruit.type}
            customStyle={fruitStyle}
          />
        );
      })}
    </div>
  );
};

export default FruitGrid;
