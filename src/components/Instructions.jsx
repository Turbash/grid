import React from "react";

const Instructions = ({ text }) => {
  return (
    <p className="mx-auto my-12 max-w-xl text-white">
      <span className="font-fredoka text-lg tracking-wide text-white">
        Instructions:
      </span>
      Arrange the apples in the red basket and the grapes in the purple basket
      using the 'order' and 'align-self' properties of flex-box on the apple.
    </p>
  );
};

export default Instructions;
