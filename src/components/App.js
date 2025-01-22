
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
   const [text, setText ] = useState("");
    
  const greet = () => {
    // e.preventDefault();
    const val = document.querySelector("input").value;
    setText(val)
    val === "" 
      ? (setText(""), alert("Please enter your name")
      )
      : setText(`Hello ${val}!`)


  }
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Enter your name:</h2>
      <input type="text" id="text"/>
      <button onClick={greet}>Submit</button>
      <p>{text}</p>
    </div>
  )
}

export default App
