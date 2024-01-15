import React from 'react'
import { useState , useEffect } from 'react';
import Result from './Result'
let score = 1



function Quiz() {


  const [questions , setquestions] = useState([])
  const [currentindex , setindex] = useState(0)
  const [click, setclick] = useState()
  // console.log(click,setclick);

  useEffect(()=>{
    getdata()
    
  },[])

   let getdata = ()=>{
    fetch('https://the-trivia-api.com/v2/questions')
      .then(response => response.json())
      .then(res =>{
        res.map((item)=>{
          item.option = [...item.incorrectAnswers,item.correctAnswer]
          item.option = shuffle(item.option)
        }) 
        // 
     setquestions(res)
        // console.log(res); 
        }
      
        )
   }


// =========================>

   function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);

// =========================>
 
if(!questions.length){
  return(
    <h1>Loading...</h1>
  )
}


function next()
{
  setindex (currentindex + 1)
}

function restart(){
  setindex(0)
  
  
}

function check(opt){
  
 opt === questions[currentindex].correctAnswer &&
 console.log( score++  );
 console.log(opt);



}



  return (
    <div>
        <h1>Quiz App</h1>
        <ul>  
           <li> {questions[currentindex].question.text}  </li>  
           <li> {questions[currentindex].correctAnswer} </li>
          </ul>



{

  questions[currentindex].option.map((data)=>{
    return(
      <div>
        <input type="radio" name='data'  onClick={()=>check(data)}  value={data} /> 
        <label htmlFor="">{data}</label> 
        <div>
          
        </div>
      </div>
      
    )

  })



  
  
} 
 {
 
        currentindex === questions.length -1  ?
        <button onClick={restart} >Restart</button> :
         <button id='btn' onClick={next}>Next</button> 
       
      }

       
    </div>
  )
}

export default Quiz;