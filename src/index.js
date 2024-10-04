import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

const customButton =
{
   color : "white",
   backgroundColor : "brown",
   display : "block",
   padding : "10px",
   fontSize : "20px",
   cursor : "pointer",
   marginLeft : "auto",
   marginRight : "auto",
   marginTop : "30px",
   borderRadius : "20px"

}
function generateId() {
  return Math.floor(Math.random() * 15) + 1;
}

function Guess() {
  const inputClear = document.getElementById("inputReset")
  const [input, setInput] = useState("");
  const [id,setId] = useState(generateId());
  const [message,setMessage] = useState("");
  const handleGuess = () => {
        if (Number(input) === id) {
       setMessage("Hurray!You Guessed the Number ");
       inputClear.value = "";
       
      }
      else if (input > id) {
       setMessage("Expecting a lower Number");
       inputClear.value = "";
      }
      else {
        setMessage("Expecting a bigger Number"); 
        inputClear.value = "";
      }
  };
  const playAgain = () =>
  {
    setId(generateId());
    setInput("");
    handleGuess();
  }
  
  return (
    <>
      <h1>Enter a number from 1 to 15</h1>
      <input 
      type="number"
      min={1}
      max={15}
        id = "inputReset"
        className='uiDesign'
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a number'>
      </input>
      <h3>{message}</h3>
      <button style = {customButton}onClick={handleGuess}>Submit</button>
      <button style={customButton} onClick={playAgain}>Play Again</button>
      

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

