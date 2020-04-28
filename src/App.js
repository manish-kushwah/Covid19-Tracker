import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./logo.png")} className="App-logo" alt="logo" />
        <p className="Welcome-text">
          <h2>Welcome to Covid-19 Tracker App</h2>
        </p>
      </header>
    </div>
  );
}

export default App;
