import { useSelector } from "react-redux";
import TodoItem from "../todo/components/TodoItem";
import "./css/Done.css";
function Done() {
  const todos = useSelector(state => state.todo.todos);
  const doneTodos = todos.filter(todo => todo.done === true).map((doneTodo, index) => (
    <TodoItem key={doneTodo.id} todo={doneTodo} />
  ));
  return (
    <div className="done-box">
      <h1>Done</h1>
      <ul>{doneTodos}</ul>
    </div>
  );
}
export default Done;
