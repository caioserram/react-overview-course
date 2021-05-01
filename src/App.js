import React from "react";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo"; //.js extension is omitted

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course'/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
