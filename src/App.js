import React from "react";
import Example from "./components/Example";
const App = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        <Example label="Tracecamp CRA Template" />
      </div>
    </div>
  );
};

export default App;
