import React from "react";
import apple from "../assets/apple.webp";
import grapes from "../assets/grapes.webp";
import banana from "../assets/banana.webp";

const fruitImages = {
  apple,
  grapes,
  banana,
};

const FruitItem = ({ type, customStyle = {}, className = "" }) => {
  const fruitImage = fruitImages[type] || fruitImages.apple;
  
  return (
    <div
      id="item"
      className={`h-10 w-10 lg:h-[70px] lg:w-[70px] ${className}`}
      style={customStyle}
    >
      <img
        alt={type}
        className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl"
        src={fruitImage}
      />
    </div>
  );
};

export default FruitItem;