import React from "react";
import { getLevel } from "../config/levels";

const Instructions = ({ level }) => {
  const levelConfig = getLevel(level);

  return (
    <p className="mx-auto my-12 max-w-xl text-white">
      <span className="font-fredoka text-lg tracking-wide text-white">
        Level {level} - Instructions:
      </span>
      <br />
      {levelConfig.instructions}
    </p>
  );
};

export default Instructions;
