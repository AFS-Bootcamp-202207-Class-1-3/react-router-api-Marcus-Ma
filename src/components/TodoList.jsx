import "../css/TodoList.css"
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {useState} from "react"
function TodoList(){
  let [todoItemList, setTodoItemList] = useState([]);
  const updateTodoItemList = function(todo){
    setTodoItemList([...todo]);
  }
  return(
    <div className="todoListBox">
      <h1>Todo List</h1>
      <TodoGroup todoItemList={todoItemList} updateTodoItemList={updateTodoItemList}/>
      <TodoGenerator todoItemList={todoItemList} updateTodoItemList={updateTodoItemList} />
    </div>
  );
}
export default TodoList;