import { useCallback, useState } from "react";
import quizCompleteLogo from '../assets/quiz-complete.png';
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

const quizIsComplete = activeQuestionIndex == QUESTIONS.length;


 const handleSelectAnswer=useCallback( function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },[]);

if(quizIsComplete){
    return(
        <div id="summary">
            <img src={quizCompleteLogo} alt={'Quiz Complete Image'} />
            <h2>Quiz  Completed!</h2>
        </div>
    )
}

const hanldeSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

const shuffledAnswers =[...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswers.sort(()=> Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={hanldeSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
