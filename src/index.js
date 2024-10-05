import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

const mstyle  = 
{
  fontSize : "2rem"
}
const customButton =
{
   color : "white",
   backgroundColor : "brown",
   display: "inline-block",
   padding : "10px",
   fontSize : "20px",
   cursor : "pointer",
   marginLeft : "10px",
   marginRight : "auto",
   marginTop : "30px",
   borderRadius : "20px"

}
function generateId() {
  return Math.floor(Math.random() * 30) + 1;
}

function Guess() {
  const [attempts,SetAttempts] = useState(0);
  const inputClear = document.getElementById("inputReset")
  const [input, setInput] = useState("");
  const [id,setId] = useState(generateId());
  const [message,setMessage] = useState("");
  const [score,setScore] = useState(0);
  const handleGuess = () => {
      if(input.length === 0)
      {
        alert("Please Enter a number");
      }
      else
      {
        if (Number(input) === id) {
          setMessage("Hurray!You Guessed the Number ");
          SetAttempts(attempts+1);
          setScore(score=>score+10);
          inputClear.value = "";
          
         }
         else if (input > id) {
          setMessage("Expecting a lower Number");
          inputClear.value = "";
          SetAttempts(attempts+1);
         }
         else {
           setMessage("Expecting a bigger Number"); 
           inputClear.value = "";
           SetAttempts(attempts+1);
         }
      }
  };
  const PlayAgain = () =>
  {
    
    SetAttempts(0);
    setId(generateId());
    setInput("");
  }
  const reset = () =>
  {
    setScore(0);
    SetAttempts(0);
    setInput("");
 }
  
  return (
    <>
    <p className='designLeftText'>Score:</p>
      <div className='leftAlign'>
        <h3>{score}</h3>
      </div>
      
      <p className='designText'>Attempts:</p>
      <div className='attempts'>
          <h3>{attempts}</h3>
      </div>
          <div className='alignInput'>
          <p style={mstyle}>Enter a number from 1 to 30</p>
          <input 
              type="number"
              min={1}
              max={30}
              id = "inputReset"
              className='uiDesign'
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter a number'>
          </input>
      </div>
      
      <h3>{message}</h3>
      <button style = {customButton}onClick={handleGuess}>Submit</button>
      <button style={customButton} onClick={PlayAgain}>Play Again</button>
      <button style={customButton} onClick={reset}>Reset</button>
    </>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Guess />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

