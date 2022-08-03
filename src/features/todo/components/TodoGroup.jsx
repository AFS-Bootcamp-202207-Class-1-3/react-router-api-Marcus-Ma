import "../css/TodoGroup.css";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../apis/todoApi.js";
import { setTodoList } from "../todoSlice"
function TodoGroup() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos().then(response => {
      dispatch(setTodoList(response.data));
    });
  }, []);
  const noDoneTodos = todos
    .filter(todo => todo.done === false)
    .map(nodoneTodo => <TodoItem key={nodoneTodo.id} todo={nodoneTodo} />);
  return (
    <div className="todo-group-box">
      <ul>{noDoneTodos}</ul>
    </div>
  );
}
export default TodoGroup;
