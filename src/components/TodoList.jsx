import "../css/TodoList.css"
import TodoGroup from "./TodoGroup";
function TodoList(){
  return(
    <div className="todoListBox">
      <h1>Todo List</h1>
      <TodoGroup/>
    </div>
  );
}
export default TodoList;