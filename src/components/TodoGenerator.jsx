import "../css/TodoGenerator.css";
function TodoGenerator(props) {
  const { updateTodoItemList } = props;
  const addTodoList = function() {
    const value = document.getElementById("input-text").value;
    if (value !== "") {
      updateTodoItemList(value);
      document.getElementById("input-text").value = "";
    }
  };
  return (
    <div className="todo-generator-box">
      <input type="text" id="input-text" />
      <button className="add-button" onClick={addTodoList}>
        add
      </button>
    </div>
  );
}
export default TodoGenerator;
