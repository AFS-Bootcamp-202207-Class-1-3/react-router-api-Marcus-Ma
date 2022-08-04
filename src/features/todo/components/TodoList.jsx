import "../css/TodoList.css";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
function TodoList() {
  return (
    <div className="todo-list-box">
      <h1>Todo List</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}
export default TodoList;
