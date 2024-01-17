import React, { useState, useEffect } from 'react';
import Result from './Result';

let score = 1;

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [click, setClick] = useState(true);
 
 
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://the-trivia-api.com/v2/questions')
      .then((response) => response.json())
      .then((res) => {
        res.map((item) => {
          item.option = [...item.incorrectAnswers, item.correctAnswer];
          item.option = shuffle(item.option);
        });
        setQuestions(res);
      });
  };

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function next() {
    setCurrentIndex(currentIndex + 1);
    setSelectedOption(null);
    setClick(true);
    
  }

  function restart() {
    setCurrentIndex(0);
  }

  function check(opt) {
    opt === questions[currentIndex].correctAnswer &&
    console.log( score++);
    setClick(false);
    console.log(opt);
    

  }

  return (
    <div>
      {!questions.length ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Quiz App</h1>
          <ul>
            <li>{questions[currentIndex].question.text}</li>
          </ul>
          {questions[currentIndex].option.map((data) => (
            <div key={data}>
              <input
                type="radio"
                name="data"
                value={data}
                checked={selectedOption === data}
                onChange={() => setSelectedOption(data)}
                onClick={()=>check(data)} 
              />
              <label htmlFor="">{data}</label>
            </div>
          ))}
          {currentIndex === questions.length - 1 ? (
            <button onClick={restart}>Restart</button>
          ) : (
            <button id="btn"  disabled={click} onClick={next}>
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
