import React from "react";
import "./App.css";
import Biocard from "./components/Biocard";
import Form from "./components/Form";
import ThingsToDo from "./components/ThingsToDo";

function App() {
  return (
    <div className="App">
      <Biocard/>
      <Form/>
      <ThingsToDo/>
    </div>
  );
}


export default App;