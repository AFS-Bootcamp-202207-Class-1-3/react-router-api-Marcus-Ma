import "../css/TodoGroup.css";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoGroup() {
  const todos = useSelector(state => state.todo.todos);
  const todoList = todos.map((todo, index) => (
    <TodoItem key={todo.id} index={index} done={todo.done} todo={todo.context} />
  ));

  return (
    <div className="todo-group-box">
      <ul>{todoList}</ul>
    </div>
  );
}
export default TodoGroup;
