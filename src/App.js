import React from "react";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'> {/*this is className since this is a javascript object (JSX), NOT html*/}
        <h2 className='actions'>My title</h2>
        <div>
          <button className='btn'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
