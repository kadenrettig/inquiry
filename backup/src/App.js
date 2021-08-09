import React, { useState, useEffect } from "react";
import DataFetching from "./components/DataFetching";

function App() {
  const [questionStreak, setQuestionStreak] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);

  function checkCorrect(responseWasCorrect) {
    console.log(responseWasCorrect);
    if (responseWasCorrect) {
      setQuestionStreak((oldStreak) => oldStreak + 1);
    } else {
      setQuestionStreak(0);
    }
    setQuestionNum((oldNum) => oldNum + 1);
  }

  return (
    <div className="text-black bg-green-100 w-full h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-center text-center">
        <div className="text-2xl font-bold">Trivia Game</div>
        <div className="text-xl mb-3">
          {"Current Streak: " + questionStreak}
        </div>
        <DataFetching
          questionNum={questionNum}
          answeredCallback={checkCorrect}
        />
      </div>
    </div>
  );
}

export default App;
