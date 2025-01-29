
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
   const [text, setText ] = useState("");
    const getVal = (e) => {
       const val = e.target.value;
       setText(val);
    }
   const clear = () => {
      setText("");
   }
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Enter your name:</h2>
      <input type="text" id="text" onInput={getVal} value={text}/>
      {!!text.length && <p>`Hello ${text}!`</p>}
      <button onClick={clear}>clear</button>
    </div>
  )
}

export default App
