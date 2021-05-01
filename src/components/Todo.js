// name of the function should start with a capital character to differentiate from vanilla html tags
function Todo(props) {
  return (
    <div className="card">
      {/*we use {} to specify that it is a dynamic code, not plain html (JSX)*/}
      <h2>{props.text}</h2>
      {/*class attribute name is className since this is a javascript object (JSX), NOT html*/}
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
export default Todo; // need to export for it to be visible to other files
