import "../css/TodoGroup.css";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoGroup() {
  const todos = useSelector(state => state.todo.todos);
  const noDoneTodos = todos.filter(todo => todo.done === false).map((nodoneTodo, index) => (
    <TodoItem key={nodoneTodo.id} todo={nodoneTodo} />
  ));
  return (
    <div className="todo-group-box">
      <ul>{noDoneTodos}</ul>
    </div>
  );
}
export default TodoGroup;
