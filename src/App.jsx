import Playground from "./components/Playground";
import Instructions from "./components/Instructions";
import CSSBox from "./components/CSSBox";

function App() {
  return (
    <>
      <div className="bg-[#1b2430] flex p-16">
        <div class="relative flex min-h-[50vh] w-full flex-col items-center justify-center lg:min-h-screen lg:w-1/2">
          <div class="mx-auto h-full w-[98%] max-w-[1000px] px-12 py-20 lg:ml-auto lg:mr-0">
            <div className="p-5">
              <h1 className="text-[#86ed26] text-3xl">
                Fruitbox <span className="text-white underline">Flex</span>
              </h1>
            </div>
            <Instructions text="Follow the steps to get started!" />
            <CSSBox />
          </div>
        </div>
        <div className="w-[50%]">
          <Playground />
        </div>
      </div>
    </>
  );
}

export default App;
