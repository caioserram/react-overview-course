// name of the function should start with a capital character to differentiate from vanilla html tags
function Todo() {
  return (
    <div className="card">
      {/*class attribute name is className since this is a javascript object (JSX), NOT html*/}
      <h2>My title</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
export default Todo; // need to export for it to be visible to other files
