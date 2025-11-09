import React, { useEffect, useState } from "react";
import { getLevel } from "../config/levels";
import { getFlexLevel } from "../config/flexLevels";

const CSSBox = ({ onCSSChange, level, mode = "grid", onSubmit, isCorrect }) => {
  const [cssInput, setCSSInput] = useState("");
  const levelConfig = mode === "grid" ? getLevel(level) : getFlexLevel(level);

  const handleChange = (e) => {
    const value = e.target.value;
    const lines = value.split("\n").filter((line) => line.trim() !== "");

    if (lines.length > levelConfig.maxLines) {
      return;
    }

    setCSSInput(value);
    onCSSChange(value);
  };

  const handleSubmit = () => {
    if (cssInput.trim()) {
      onSubmit();
    }
  };

  useEffect(() => {
    setCSSInput("");
    onCSSChange("");
  }, [level]);

  return (
    <div className="mx-auto mt-24 max-w-lg rounded-md bg-slate-400 px-8 py-5 font-mono shadow-2xl text-black">
      {levelConfig.fruitCSS && Object.keys(levelConfig.fruitCSS).length > 0 && (
        <>
          <p>
            <span className="false">#container {"{"}</span>
            <br />
            {levelConfig.fruitCSS.display && (
              <>
                <span className="ml-6">
                  display: {levelConfig.fruitCSS.display};
                </span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.gridTemplateColumns && (
              <>
                <span className="ml-6">
                  grid-template-columns:{" "}
                  {levelConfig.fruitCSS.gridTemplateColumns};
                </span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.gridTemplateRows && (
              <>
                <span className="ml-6">
                  grid-template-rows: {levelConfig.fruitCSS.gridTemplateRows};
                </span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.gap && (
              <>
                <span className="ml-6">gap: {levelConfig.fruitCSS.gap};</span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.gridAutoRows && (
              <>
                <span className="ml-6">
                  grid-auto-rows: {levelConfig.fruitCSS.gridAutoRows};
                </span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.gridAutoColumns && (
              <>
                <span className="ml-6">
                  grid-auto-columns: {levelConfig.fruitCSS.gridAutoColumns};
                </span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.gridAutoFlow && (
              <>
                <span className="ml-6">
                  grid-auto-flow: {levelConfig.fruitCSS.gridAutoFlow};
                </span>
                <br />
              </>
            )}
            {levelConfig.fruitCSS.justifyItems && (
              <>
                <span className="ml-6">
                  justify-items: {levelConfig.fruitCSS.justifyItems};
                </span>
                <br />
              </>
            )}
            <span className="false">{"}"}</span>
            <br />
          </p>
        </>
      )}

      <div>
        <p>
          <span className="false">
            {levelConfig.cssTarget === "container" ? "#container" : "#item"}{" "}
            {"{"}
          </span>
        </p>
        <div className="ml-6">
          <textarea
            id="inputcss"
            spellCheck="false"
            rows={levelConfig.maxLines || 1}
            className="mt-2 w-full resize-none bg-white rounded-md p-2 text-black"
            placeholder={levelConfig.placeholder}
            value={cssInput}
            onChange={handleChange}
            style={{ minHeight: `${(levelConfig.maxLines || 1) * 1.5}rem` }}
          />
          <p className="text-xs text-gray-600 mt-1">
            Max {levelConfig.maxLines || 1} line
            {(levelConfig.maxLines || 1) > 1 ? "s" : ""} allowed
          </p>
        </div>
        <p>
          <span className="false">{"}"}</span>
        </p>

        <div className="mt-4 text-center">
          <button
            onClick={handleSubmit}
            disabled={!cssInput.trim()}
            className={`px-6 py-2 rounded-md font-bold text-white transition-colors ${
              cssInput.trim()
                ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            } ${isCorrect === true ? "bg-green-600" : ""} ${
              isCorrect === false ? "bg-red-600" : ""
            }`}
          >
            {isCorrect === true
              ? "✓ Correct!"
              : isCorrect === false
              ? "✗ Try Again"
              : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSSBox;
