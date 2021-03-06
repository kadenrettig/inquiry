import React, { useState, useEffect } from "react";
import DataFetching from "./components/DataFetching";

function App() {
  const [questionStreak, setQuestionStreak] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);

  function checkCorrect(responseWasCorrect) {
    console.log(responseWasCorrect);
    if (responseWasCorrect) {
      setQuestionStreak((oldStreak) => oldStreak + 1);
    } else {
      if (highestStreak < questionStreak) {
        setHighestStreak(questionStreak);
      }
      setQuestionStreak(0);
    }
    setQuestionNum((oldNum) => oldNum + 1);
  }

  return (
    <div className="font-serif text-black bg-yellow-400 h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-top text-center">
        <a
          className="underline"
          href="https://www.linkedin.com/in/kaden-rettig-a26186196/"
        >
          Created by Kaden Rettig
        </a>
        <div className="mb-5 mt-10 text-4xl font-bold">Trivia Game</div>
        <div className="text-xl mb-3">{"Highest Streak: " + highestStreak}</div>
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
