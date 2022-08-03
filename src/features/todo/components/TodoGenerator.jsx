import "../css/TodoGenerator.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../todoSlice";
import { saveTodo } from "../../apis/todoApi.js";
import { Button, Input } from "antd";
function TodoGenerator() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const addTodo = function() {
    if (inputValue !== "") {
      saveTodo({ context: inputValue }).then(response => {
        dispatch(addTodoItem(response.data));
      });
      setInputValue(" ");
    }
  };
  const handleChange = function(event) {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <div className="todo-generator-box">
      <Input.Group compact>
        <Input style={{ width: '300px' }} value={inputValue} onChange={handleChange} />
        <Button type="primary" onClick={addTodo}>
          Submit
        </Button>
      </Input.Group>
    </div>
  );
}
export default TodoGenerator;
