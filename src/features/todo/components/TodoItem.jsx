import "../css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, changeDoneState } from "../todoSlice";
import { deleteTodoById } from "../../apis/todoApi";
function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const deleteTodo = function() {
    deleteTodoById(todo.id).then(response=>{
      dispatch(deleteTodoItem(response.data.id));
    })
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
