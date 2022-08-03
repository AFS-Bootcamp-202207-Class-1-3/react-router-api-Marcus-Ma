import "../css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, changeDoneState } from "../todoSlice";
function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const deleteTodo = function() {
    dispatch(deleteTodoItem(todo.id));
  };
  const changeDone = function() {
    dispatch(changeDoneState(todo.id));
  };
  return (
      <li className="todo-li" >
        <span className={todo.done ? "line-through-text":"none-text"} onClick={changeDone} >
          {todo.context}
        </span>
        <button type="button" className="delete-button" onClick={deleteTodo}>
          &times;
        </button>
      </li>
  );
}
export default TodoItem;
