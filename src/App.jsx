import { useState } from "react";
import Playground from "./components/Playground";
import Instructions from "./components/Instructions";
import CSSBox from "./components/CSSBox";
import { getLevel } from "./config/levels";

function App() {
  const [level, setLevel] = useState(1);
  const [customCSS, setCustomCSS] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); 
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCSSChange = (css) => {
    setCustomCSS(css);
    setIsCorrect(null); 
  };

  const handleSubmit = () => {
    const levelConfig = getLevel(level);
    const userCSS = customCSS.trim().toLowerCase();
    
    const isAnswerCorrect = levelConfig.acceptedAnswers.some(answer => 
      userCSS === answer.toLowerCase().trim()
    );
    
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setLevel(level + 1);
        setCustomCSS("");
        setIsCorrect(null);
      }, 2000);
    }
  };

  const handlePreviousLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
      setCustomCSS("");
      setIsCorrect(null);
      setShowSuccess(false);
    }
  };

  const handleNextLevel = () => {
    setLevel(level + 1);
    setCustomCSS("");
    setIsCorrect(null);
    setShowSuccess(false);
  };

  return (
    <>
      <div className="bg-[#1b2430] flex p-16">
        <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center lg:min-h-screen lg:w-1/2">
          <div className="mx-auto h-full w-[98%] max-w-[1000px] px-12 py-20 lg:ml-auto lg:mr-0">
            <div className="mx-auto flex max-w-xl flex-col items-center justify-between md:flex-row">
              <h1 className="text-center font-fredoka text-4xl tracking-wider text-white lg:text-left">
                <span className="text-[#86ed26]">Fruitbox</span>{" "}
                <span className="underline decoration-wavy">Grid</span>
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
                  className="ml-1 cursor-pointer text-3xl"
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
            
            <Instructions level={level} />
            <CSSBox 
              onCSSChange={handleCSSChange} 
              level={level} 
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
          <Playground customCSS={customCSS} level={level} isCorrect={isCorrect} />
        </div>
      </div>
    </>
  );
}

export default App;
