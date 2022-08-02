import "../css/TodoGenerator.css";
import {useState} from "react";
function TodoGenerator(props) {
  const { updateTodoItemList } = props;
  const [inputValue, setInputValue] = useState('');
  const addTodoList = function() {
    if(inputValue!==""){
      updateTodoItemList(inputValue);
      document.getElementById("input-text").value = ""
    }
  };
  const handleChange = function(event){
    const value = event.target.value;
    setInputValue(value)
  }
  return (
    <div className="todo-generator-box">
      <input type="text" id="input-text" onChange={handleChange} />
      <button className="add-button" onClick={addTodoList}>
        add
      </button>
    </div>
  );
}
export default TodoGenerator;
