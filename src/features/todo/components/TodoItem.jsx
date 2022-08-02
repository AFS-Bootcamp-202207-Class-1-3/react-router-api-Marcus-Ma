import "../css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, changeDoneState } from "../todoSlice";
function TodoItem(props) {
  const { index, todo, done } = props;
  const dispatch = useDispatch();
  const deleteTodo = function() {
    dispatch(deleteTodoItem(index));
  };
  const changeDone = function(event) {
    dispatch(changeDoneState(index));
    event.target.style.textDecoration = done ? "none" : "line-through";
  };
  return (
      <li className="todo-li" >
        <span onClick={changeDone}>{todo}</span>
        <button type="button" className="delete-button" onClick={deleteTodo}>
          x
        </button>
      </li>
  );
}
export default TodoItem;
