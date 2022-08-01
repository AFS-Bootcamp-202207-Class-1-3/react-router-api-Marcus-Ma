import "../css/TodoList.css"
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
function TodoList(){
  return(
    <div className="todoListBox">
      <h1>Todo List</h1>
      <TodoGroup/>
      <TodoGenerator/>
    </div>
  );
}
export default TodoList;