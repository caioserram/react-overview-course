// name of the function should start with a capital character to differentiate from vanilla html tags
function Todo(props) {
  // function nesting (function inside function) is a common javascript feature which is used here
  function deleteHandler() {
    // since the funcion is nested, we can use the same parameteres as the parent function
    // console.log(props.text)
  }

  return (
    <div className="card">
      {/* We use {} to specify that it is a dynamic code, not plain html (JSX)*/}
      <h2>{props.text}</h2>
      {/* Class attribute name is className since this is a javascript object (JSX), NOT html*/}
      <div className="actions">
        {/* Event listener should be passed as function pointers instead of function calls
         * (whitout parenthesis()) since we want react to decide when to call the function (onClick)
         * If we make a function call, it will be executed every time the view is rendered */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todo; // need to export for it to be visible to other files
