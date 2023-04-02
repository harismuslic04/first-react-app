import React from "react";
import "./App.css";
import Greeting from "./components/greetings/Greeting";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 style={{ color: "white" }}>Logo</h1>
      </header>
      <Greeting appName={"Our First App"} username={"Haris Muslic"}></Greeting>
    </div>
  );
}

export default App;
