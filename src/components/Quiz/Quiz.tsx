import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { quizData } from "../../constants/data";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(10);

  const handleStart = () => {
    setGameStarted(true);
    
  };

  const handleNext = () => {
   if(selectedOption){
      if(selectedOption === quizData[currentQuestionIndex].answer){
        setScore((prev) => prev + 1);
      }
   }

   const nextIndex = currentQuestionIndex + 1;
   if(nextIndex < quizData.length){
    setCurrentQuestionIndex(nextIndex);
    setProgressValue( (nextIndex / quizData.length) * 100 );
    setSelectedOption("");
    setTimer(10);
   }else{
    setGameStarted(false);
    alert(`Quiz completed! Your score is ${score}/${quizData.length}`);
    setCurrentQuestionIndex(0);
    setScore(0);
    setProgressValue(0);
    setSelectedOption("");
    setTimer(10);
   }

  }

   useEffect(() => {
    if(!gameStarted) return;
    if(timer === 0) handleNext();

    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
    return () => clearInterval(interval);
  }, [timer, gameStarted]);

  return (
    <section className="quiz">
      <section className="quiz-header">
        <h2 className="js_quiz_title">JavaScript Quiz</h2>
        <p>
          <i>Test your knowledge of JavaScript with this quiz!</i>
        </p>
      </section>

      <section className="quiz-content">
        <div className="card_container">
          <div className="progress_bar_section">
            <div className="progress_bar_container">
              <div
                className="progress_bar"
                style={{ width: `${progressValue}%` }}
              ></div>
              <span className="progress_bar_label">{progressValue}%</span>
              {gameStarted && <span className="question_count">Question: {currentQuestionIndex}/{quizData.length}</span>}
            </div>
          </div>
          <div className="questions_section">
            {gameStarted ? (
              <div className="question_div">
                <div className="question_text">{quizData[currentQuestionIndex].question}</div>
                <div className="options_div">
                  {quizData[currentQuestionIndex].options.map((option,index) => {
                    return <div key={index}>
                      <input id={`option-${index}`} type="radio" className="radio_input" value={option} checked={selectedOption === option} onChange={() => setSelectedOption(option)} />
                      <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  })}
                </div>
                <div className="timer_div">
                  Time Left: {timer} seconds
                </div>
              </div>
            ) : (
              <div className="question_text">
                This is short quiz to test knowledge about JS. Do you want to
                try it?
              </div>
            )}
          </div>
          <div className="buttons_section">
            <button
              className={`${gameStarted ? "active" : ""}`}
              disabled={gameStarted}
              onClick={handleStart}
            >
              Start
            </button>
            <div className="score_label">Score: {score}</div>
            <button
              className={`${!gameStarted ? "active" : ""}`}
              disabled={!gameStarted}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Quiz;
