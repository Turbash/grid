import React from "react";
import FruitItem from "./FruitItem";
import { getLevel } from "../config/levels";

const FruitGrid = ({ fruits, gridStyle, containerClass, customCSS, level, isCorrect }) => {
  const levelConfig = getLevel(level);
  
  const parseCustomCSS = () => {
    const style = {};
    if (customCSS) {
      const cssText = customCSS.replace(/\n/g, ' ').trim();
      
      if (cssText.includes('grid-template-areas')) {
        const match = cssText.match(/grid-template-areas\s*:\s*(.+?)(?:;|$)/);
        if (match) {
          style.gridTemplateAreas = match[1].trim();
        }
      } else if (cssText.includes('grid-template:')) {
        const match = cssText.match(/grid-template\s*:\s*(.+?)(?:;|$)/);
        if (match) {
          style.gridTemplate = match[1].trim();
        }
      } else {
        const props = cssText.split(";").filter((p) => p.trim());
        props.forEach((prop) => {
          const [key, value] = prop.split(":").map((s) => s.trim());
          if (key && value) {
            const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
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

  const containerStyle = levelConfig.cssTarget === "container" 
    ? { ...gridStyle, ...userCSS }
    : gridStyle;

  return (
    <div id="container" className={containerClass} style={containerStyle}>
      {fruits.map((fruit, index) => {
        let fruitStyle = {};
        const positionProperty = getPositionProperty();
        
        if (levelConfig.cssTarget === "item") {
          fruitStyle = { ...userCSS };
        }
        
        if (isCorrect === true) {
          fruitStyle[positionProperty] = getPositionValue(fruit, true);
        } else if (level > 1 && levelConfig.cssTarget === "item") {
          fruitStyle[positionProperty] = getPositionValue(fruit, false);
        } else if (level > 1) {
          fruitStyle[positionProperty] = getPositionValue(fruit, false);
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
};export default FruitGrid;
