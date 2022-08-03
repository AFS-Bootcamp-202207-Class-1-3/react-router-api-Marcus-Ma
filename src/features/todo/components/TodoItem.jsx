import "../css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, changeDoneState } from "../todoSlice";
function TodoItem(props) {
  const { index, todo, done } = props;
  const dispatch = useDispatch();
  const deleteTodo = function() {
    dispatch(deleteTodoItem(index));
  };
  const changeDone = function() {
    dispatch(changeDoneState(index));
  };
  return (
      <li className="todo-li" >
        <span className={done ? "line-through-text":"none-text"} onClick={changeDone} >{todo}</span>
        <button type="button" className="delete-button" onClick={deleteTodo}>
          &times;
        </button>
      </li>
  );
}
export default TodoItem;
