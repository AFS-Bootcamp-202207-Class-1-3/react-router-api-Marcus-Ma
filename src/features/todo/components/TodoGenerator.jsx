import "../css/TodoGenerator.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../todoSlice";
import { saveTodo } from "../../apis/todoApi.js";
import { Button, Input, message } from "antd";
function TodoGenerator() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const errorMessage = "新增Todo内容不能为空!";
  const error = () => {
    message.error(errorMessage);
  };
  const addTodo = function() {
    if (inputValue !== "") {
      saveTodo({ context: inputValue }).then(response => {
        dispatch(addTodoItem(response.data));
      });
      setInputValue(" ");
    } else {
      error();
    }
  };
  const handleChange = function(event) {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <div className="todo-generator-box">
      <Input.Group compact>
        <Input
          style={{ width: "300px" }}
          value={inputValue}
          onChange={handleChange}
        />
        <Button type="primary" onClick={addTodo}>
          Submit
        </Button>
      </Input.Group>
    </div>
  );
}
export default TodoGenerator;
