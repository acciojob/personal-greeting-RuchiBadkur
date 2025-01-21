
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Enter your name:</h2>
      <input type="text" id="text"/>
      { 
        const text = document.getElementById("text").value;
        (text !=="")
        ?
        <p>{`Hello ${text}!`}</p>
        :
        <p>{`Hello User!`}</p>
      }
    </div>
  )
}

export default App
