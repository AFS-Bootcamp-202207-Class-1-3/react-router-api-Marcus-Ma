import "../css/TodoItem.css"
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "../todoSlice";
function TodoItem(props){
  const {index,todo} = props;
  const dispatch = useDispatch();
  const deleteTodo = function(){
    dispatch(deleteTodoItem(index));
  }
  return(
    <div className="todo-item">
      <input type="text" value={todo} readOnly/><button className="delete-button"  onClick={deleteTodo}>delete</button>
    </div>
  )
}
export default TodoItem;