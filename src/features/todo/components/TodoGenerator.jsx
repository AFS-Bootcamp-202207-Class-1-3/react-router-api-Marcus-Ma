import "../css/TodoGenerator.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../todoSlice";
import {saveTodo} from "../../apis/todoApi.js";
function TodoGenerator() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const addTodo = function() {
    if (inputValue !== "") {
      saveTodo({context:inputValue}).then(response =>{
        dispatch(addTodoItem(response.data));
      })
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
