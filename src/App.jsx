import { useState } from "react";
import Playground from "./components/Playground";
import Instructions from "./components/Instructions";
import CSSBox from "./components/CSSBox";
import { getLevel } from "./config/levels";
import { getFlexLevel } from "./config/flexLevels";

function App() {
  const [mode, setMode] = useState("grid");
  const [level, setLevel] = useState(1);
  const [customCSS, setCustomCSS] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPreviewCorrect, setIsPreviewCorrect] = useState(false);

  const getCurrentLevelConfig = () => {
    return mode === "grid" ? getLevel(level) : getFlexLevel(level);
  };

  const getMaxLevels = () => {
    return mode === "grid" ? 10 : 17;
  };

  const checkIfCorrect = (css) => {
    const levelConfig = getCurrentLevelConfig();
    const userCSS = (css || "").trim().toLowerCase();

    if (
      Array.isArray(levelConfig.missingProps) &&
      levelConfig.missingProps.length
    ) {
      const providedDeclarations = new Set();
      const providedProperties = new Set();
      const props = userCSS
        .split(/;|\n/)
        .map((s) => s.trim())
        .filter(Boolean);

      props.forEach((prop) => {
        const colonIndex = prop.indexOf(":");
        if (colonIndex > 0) {
          const key = prop.substring(0, colonIndex).trim();
          const value = prop.substring(colonIndex + 1).trim();
          if (key && value) {
            providedProperties.add(key.toLowerCase());
            providedDeclarations.add(
              `${key}:${value}`.toLowerCase().replace(/\s+/g, "")
            );
          }
        }
      });

      return levelConfig.missingProps.every((req) => {
        const reqLower = req.toLowerCase().replace(/\s+/g, "");

        if (req.includes(":")) {
          return providedDeclarations.has(reqLower);
        } else {
          return providedProperties.has(reqLower);
        }
      });
    }

    return Array.isArray(levelConfig.acceptedAnswers)
      ? levelConfig.acceptedAnswers.some(
          (answer) => userCSS === answer.toLowerCase().trim()
        )
      : false;
  };

  const handleCSSChange = (css) => {
    setCustomCSS(css);
    setIsCorrect(null);

    const isCurrentlyCorrect = checkIfCorrect(css);
    setIsPreviewCorrect(isCurrentlyCorrect);
  };

  const handleSubmit = () => {
    const isAnswerCorrect = checkIfCorrect(customCSS);

    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        const maxLevels = getMaxLevels();
        if (level < maxLevels) {
          setLevel(level + 1);
          setCustomCSS("");
          setIsCorrect(null);
          setIsPreviewCorrect(false);
        }
      }, 2000);
    }
  };

  const handlePreviousLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
      setCustomCSS("");
      setIsCorrect(null);
      setShowSuccess(false);
      setIsPreviewCorrect(false);
    }
  };

  const handleNextLevel = () => {
    const maxLevels = getMaxLevels();
    if (level < maxLevels) {
      setLevel(level + 1);
      setCustomCSS("");
      setIsCorrect(null);
      setShowSuccess(false);
      setIsPreviewCorrect(false);
    }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setLevel(1);
    setCustomCSS("");
    setIsCorrect(null);
    setShowSuccess(false);
    setIsPreviewCorrect(false);
  };

  return (
    <>
      <div className="bg-[#1b2430] flex p-16">
        <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center lg:min-h-screen lg:w-1/2">
          <div className="mx-auto h-full w-[98%] max-w-[1000px] px-12 py-20 lg:ml-auto lg:mr-0">
            <div className="mx-auto flex max-w-xl flex-col items-center justify-between md:flex-row">
              <h1 className="text-center font-fredoka text-4xl tracking-wider text-white lg:text-left">
                <span className="text-[#86ed26]">Fruitbox</span>{" "}
                <span className="underline decoration-wavy">
                  {mode === "grid" ? "Grid" : "Flex"}
                </span>
              </h1>
              <p className="mt-6 flex items-center rounded-md bg-gray-500 bg-opacity-25 px-4 py-1 text-gray-300 md:mt-0">
                <button
                  onClick={handlePreviousLevel}
                  disabled={level === 1}
                  className="mr-1 cursor-pointer text-3xl disabled:opacity-50"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-label="Go to the previous level"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Previous Level</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                  </svg>
                </button>
                Level <span className="ml-2 block font-fredoka">{level}</span>
                <button
                  onClick={handleNextLevel}
                  disabled={level >= getMaxLevels()}
                  className="ml-1 cursor-pointer text-3xl disabled:opacity-50"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-label="Go to the next level"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Next Level</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
                </button>
              </p>
            </div>

            <div className="mx-auto mt-6 flex max-w-md rounded-lg bg-gray-600 p-1">
              <button
                onClick={() => handleModeSwitch("grid")}
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  mode === "grid"
                    ? "bg-[#86ed26] text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                CSS Grid
              </button>
              <button
                onClick={() => handleModeSwitch("flexbox")}
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  mode === "flexbox"
                    ? "bg-[#86ed26] text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Flexbox
              </button>
            </div>

            <Instructions level={level} mode={mode} />
            <CSSBox
              onCSSChange={handleCSSChange}
              level={level}
              mode={mode}
              onSubmit={handleSubmit}
              isCorrect={isCorrect}
            />

            {showSuccess && (
              <div className="mx-auto mt-4 max-w-lg rounded-md bg-green-500 px-6 py-3 text-center text-white font-bold">
                🎉 Correct! Moving to next level...
              </div>
            )}

            {isCorrect === false && (
              <div className="mx-auto mt-4 max-w-lg rounded-md bg-red-500 px-6 py-3 text-center text-white font-bold">
                ❌ Not quite right. Try again!
              </div>
            )}
          </div>
        </div>
        <div className="w-[50%]">
          <Playground
            customCSS={customCSS}
            level={level}
            mode={mode}
            isCorrect={isCorrect !== null ? isCorrect : isPreviewCorrect}
          />
        </div>
      </div>
    </>
  );
}

export default App;
