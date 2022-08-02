import "../css/TodoGenerator.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../todoSlice";
function TodoGenerator() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const addTodo = function() {
    if (inputValue !== "") {
      const todo = {
        context: inputValue,
        done: false
      };
      dispatch(addTodoItem(todo));
      document.getElementById("input-text").value = "";
    }
  };
  const handleChange = function(event) {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <div className="todo-generator-box">
      <input type="text" id="input-text" onChange={handleChange} />
      <button className="add-button" onClick={addTodo}>
        add
      </button>
    </div>
  );
}
export default TodoGenerator;
