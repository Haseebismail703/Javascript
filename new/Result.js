import React from 'react'
import '../style/Quiz.css'
function Result(prop) {
   
    const handleClick = () => {
        
        window.location.reload()
      };

   let incorrectAnswers =   prop.score - 10 
  return (
    <div className="card">
   
      <center>

     
{prop.score >= 5 ?
      <img className='img'  src='https://media0.giphy.com/media/nJ2svGMHDVvUXlxz1o/giphy.gif' alt="Card Image"  />
      : 
      <img className='img'  src='https://media.tenor.com/bXC6xjB1S5kAAAAM/coffin-dance-funeral.gif' alt="Card Image"  /> 
      }
      </center>
      <div className="card-info">
        <div className="score">
          

         <center> {prop.score >= 5 ? <h1 className='pass'> Congrate You Pass</h1> : <h1 className='fail'>Sorry You Fail</h1>   }</center>




         {prop.score >= 5 ? 
          <>
          <p className='pass'>Correct Answers:{prop.score} </p>
          <p className='pass' >Incorrect Answers: {incorrectAnswers} </p>
          <h3  className='pass'>Total Score:{prop.score} </h3>
         </>
    :
       <>
    <p  className='fail'>Correct Answers:{prop.score} </p>
          <p className='fail'>Incorrect Answers:{incorrectAnswers}</p>
          <h3 className='fail'>Total Score:{prop.score}/10 </h3>
         </>}
         


        <center>  <button className='button1 ' onClick={handleClick}>Lets Try New Question</button></center>

        </div>
      </div>
    </div>
  )
}

export default Result