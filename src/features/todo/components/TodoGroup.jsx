import "../css/TodoGroup.css";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoGroup() {
  const todos = useSelector(state => state.todo.todos);
  const noDoneTodo = todos.filter(todo => todo.done === false);
  const todoList = noDoneTodo.map((todo, index) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return (
    <div className="todo-group-box">
      <ul>{todoList}</ul>
    </div>
  );
}
export default TodoGroup;
