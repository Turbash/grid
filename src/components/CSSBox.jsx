import React, { useState } from "react";

const CSSBox = ({ onCSSChange, level }) => {
  const [cssInput, setCSSInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setCSSInput(value);
    onCSSChange(value);
  };

  return (
    <div className="mx-auto mt-24 max-w-lg rounded-md bg-slate-400 px-8 py-5 font-mono shadow-2xl text-black">
      <p>
        <span className="false">#container {"{"}</span>
        <br />
        {level === 1 && (
          <>
            <span className="ml-6">display: grid;</span>
            <br />
            <span className="ml-6">grid-template-columns: repeat(5, 1fr);</span>
            <br />
            <span className="ml-6">gap: 1rem;</span>
            <br />
          </>
        )}
        <span className="false">{"}"}</span>
        <br />
      </p>
      <div>
        <p>
          <span className="false">#item {"{"}</span>
        </p>
        <div className="ml-6">
          <textarea
            id="inputcss"
            spellCheck="false"
            rows="1"
            className="mt-2 w-full resize-none bg-white rounded-md p-2 text-black"
            value={cssInput}
            onChange={handleChange}
          ></textarea>
        </div>
        <p>
          <span className="false">{"}"}</span>
        </p>
      </div>
    </div>
  );
};

export default CSSBox;
