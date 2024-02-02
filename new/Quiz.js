import React, { useState, useEffect } from 'react';
import Result from './Result';
import '../style/Quiz.css'
let score = 0;

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [click, setClick] = useState(true);
    const [count, setCount] = useState(1);
    const [showResult, setShowResult] = useState(true);

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
        selectedOption === questions[currentIndex].correctAnswer && score++;
        console.log(score);
        setCount(count + 1);
    }

    function Submit() {
        setCurrentIndex(0);
        setCount(0);
        selectedOption === questions[currentIndex].correctAnswer && score++
        // setScore(0); // Reset the score
        setShowResult(false);// Trigger Result component rendering
        setSelectedOption(null);
        
        
    }

    function check(opt) {
        setClick(false);
    }

    if (!questions.length) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <div className='container'   >

            <div className='container-two' >

            
                {showResult ?
                    (<>
                        <div className='con'  >
                            <h1>Quiz App</h1>
                            <p>{count}/10</p>
                           
                            <label className='label' htmlFor="">{questions[currentIndex].question.text}</label>
                             <label htmlFor="">{questions[currentIndex].correctAnswer}</label>
                        </div>
                        {questions[currentIndex].option.map((data) => (
                            <div className='div-two' key={data}>
                               



                                <label className='data' htmlFor="">
                                    
                                    <input
                                    className='inp'
                                    type="radio"
                                    name="data"
                                    value={data}
                                    checked={selectedOption === data}
                                    onChange={() => setSelectedOption(data)}
                                    onClick={() => check(data)}
                                /> 
                                    
                                    
                                    
                                    
                                     <i>{data} </i>  </label>


                            </div>


                        ))}

                        {currentIndex === questions.length - 1 ? (
                            <button disabled={click} className='button1 ' onClick={Submit}>Submit Now</button>
                            
                        



                        ) : (
                           


                            <button disabled={click} onClick={next} className="button">
                                    Next 
                            </button>
                        )
                        }
                        
                    </>)
                    : (<Result score={score} />)
                }
                
            </div>
        </div>
    );
}

export default Quiz;
