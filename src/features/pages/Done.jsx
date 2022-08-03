import { useSelector } from "react-redux";
import TodoItem from "../todo/components/TodoItem";
import "./css/Done.css";
function Done() {
  const todos = useSelector(state => state.todo.todos);
  const doneTodos = todos.filter(todo => todo.done === true);
  const doneTodoLi = doneTodos.map((todo, index) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return (
    <div className="done-box">
      <h1>Done</h1>
      <ul>{doneTodoLi}</ul>
    </div>
  );
}
export default Done;
