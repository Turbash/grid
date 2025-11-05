import Playground from "./components/Playground";
import Instructions from "./components/Instructions";
import CSSBox from "./components/CSSBox";

function App() {
  return (
    <>
      <div className="bg-blue-900">
        <CSSBox />
        <Instructions text="Follow the steps to get started!" />
        <Playground />
      </div>
    </>
  );
}

export default App;
