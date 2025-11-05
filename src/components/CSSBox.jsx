import React from "react";

const CSSBox = () => {
  return (
    <div className="mx-auto mt-24 max-w-lg rounded-md bg-slate-400 px-8 py-5 font-mono shadow-2xl text-black">
      <p>
        <span className="false">#container {"{"}</span>
        <br />
        <span className="ml-6">display: flex;</span>
        <br />
        <span className="ml-6">align-items: flex-start;</span>
        <br />
        <span className="false">{"}"}</span>
        <br />
      </p>
      <div>
        <p>
          <span className="false">#apple {"{"}</span>
        </p>
        <div className="ml-6">
          <textarea
            id="inputcss"
            spellCheck="false"
            rows="2"
            className="mt-2 w-full resize-none bg-white rounded-md p-1 text-black"
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
