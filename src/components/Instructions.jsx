import React from "react";

const Instructions = ({ text, level }) => {
  const instructions = {
    1: "The fruits are at the top and the baskets are at the bottom. Use CSS Grid's 'align-self: end' property to move all fruits down to their matching baskets. Apples go to red baskets, grapes go to purple baskets!",
  };

  return (
    <p className="mx-auto my-12 max-w-xl text-white">
      <span className="font-fredoka text-lg tracking-wide text-white">
        Level {level} - Instructions:
      </span>
      <br />
      {instructions[level] || "Unknown level"}
    </p>
  );
};

export default Instructions;
