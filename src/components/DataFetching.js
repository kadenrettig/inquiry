import React, { useState, useEffect } from "react";
import axios from "axios";
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

function DataFetching({ answeredCallback, questionNum }) {
  const [questionCategory, setQuestionCategory] = useState();
  const [questionDifficulty, setQuestionDifficulty] = useState();
  const [questionText, setQuestionText] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [questionIsReady, setQuestionIsReady] = useState(false);

  function assembleQuestion(question) {
    console.log(question);
    setQuestionCategory(question.category);
    setQuestionDifficulty(question.difficulty);
    setQuestionText(question.question);
    setCorrectAnswer(question.correct_answer);
    setQuestionIsReady(true);
  }

  function displayQuestion() {
    return (
      <div className="text-white mt-40 font-serif shadow-2xl p-5 rounded-lg bg-gray-900 text-center border border-gray-50">
        <h1 className="font-bold text-xl">{questionCategory}</h1>
        <h2 className="text-lg capitalize">
          {"Difficulty: " + questionDifficulty}
        </h2>
        <p className="font-serif">{entities.decode(questionText)}</p>

        <div className="flex justify-around py-4">
          <button
            className="bg-green-600 py-2 px-5 rounded-lg text-white font-bold font-sans"
            onClick={() => answeredCallback("True" === correctAnswer)}
          >
            True
          </button>
          <button
            className="bg-red-600 py-2 px-5 rounded-lg text-white font-bold"
            onClick={() => answeredCallback("False" === correctAnswer)}
          >
            False
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=1&type=boolean")
      .then((response) => {
        console.log(response.data);
        assembleQuestion(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [questionNum]);

  return <div className="xl:w-4/5 p-5 self-center">{displayQuestion()}</div>;
}

export default DataFetching;
